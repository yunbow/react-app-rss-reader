import { useState, useEffect, useCallback } from 'react';
import { Feed, Article, ParsedFeed } from './types';
import { CONFIG } from '../../Config';

export const useRSSReader = () => {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedFeeds = localStorage.getItem(CONFIG.STORAGE_KEY);
    if (savedFeeds) {
      const parsedFeeds = JSON.parse(savedFeeds);
      setFeeds(parsedFeeds);
      if (parsedFeeds.length > 0) {
        loadAllArticles(parsedFeeds);
      }
    }
  }, []);

  const saveFeedsToStorage = useCallback((feedsToSave: Feed[]) => {
    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(feedsToSave));
  }, []);

  const getTextContent = (parent: Element, selector: string): string => {
    const element = parent.querySelector(selector);
    return element ? element.textContent?.trim() || '' : '';
  };

  const parseRSS = (xmlDoc: Document): ParsedFeed => {
    const channel = xmlDoc.querySelector('channel');
    const items = xmlDoc.querySelectorAll('item');

    if (!channel) {
      throw new Error('Invalid RSS format');
    }

    const feed: ParsedFeed = {
      title: getTextContent(channel, 'title'),
      description: getTextContent(channel, 'description'),
      articles: []
    };

    items.forEach(item => {
      const article: Article = {
        title: getTextContent(item, 'title'),
        link: getTextContent(item, 'link'),
        description: getTextContent(item, 'description'),
        pubDate: getTextContent(item, 'pubDate'),
        guid: getTextContent(item, 'guid') || getTextContent(item, 'link')
      };
      feed.articles.push(article);
    });

    return feed;
  };

  const parseAtom = (xmlDoc: Document): ParsedFeed => {
    const feed = xmlDoc.querySelector('feed');
    const entries = xmlDoc.querySelectorAll('entry');

    if (!feed) {
      throw new Error('Invalid Atom format');
    }

    const feedData: ParsedFeed = {
      title: getTextContent(feed, 'title'),
      description: getTextContent(feed, 'subtitle'),
      articles: []
    };

    entries.forEach(entry => {
      const link = entry.querySelector('link');
      const article: Article = {
        title: getTextContent(entry, 'title'),
        link: link ? link.getAttribute('href') || '' : '',
        description: getTextContent(entry, 'summary') || getTextContent(entry, 'content'),
        pubDate: getTextContent(entry, 'published') || getTextContent(entry, 'updated'),
        guid: getTextContent(entry, 'id')
      };
      feedData.articles.push(article);
    });

    return feedData;
  };

  const parseFeed = (xmlDoc: Document): ParsedFeed => {
    const rssChannel = xmlDoc.querySelector('channel');
    const atomFeed = xmlDoc.querySelector('feed');

    if (rssChannel) {
      return parseRSS(xmlDoc);
    } else if (atomFeed) {
      return parseAtom(xmlDoc);
    } else {
      throw new Error('サポートされていないフィード形式です');
    }
  };

  const fetchFeed = async (url: string): Promise<ParsedFeed> => {
    const proxyUrl = `${CONFIG.PROXY_URL}${encodeURIComponent(url)}`;

    try {
      const response = await fetch(proxyUrl);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

      if (xmlDoc.querySelector('parsererror')) {
        throw new Error('無効なXML形式です');
      }

      return parseFeed(xmlDoc);
    } catch (error) {
      throw new Error(`フィードの取得に失敗しました: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const loadAllArticles = async (feedsToLoad: Feed[]) => {
    setLoading(true);
    const allArticles: Article[] = [];

    for (const feed of feedsToLoad) {
      try {
        const feedData = await fetchFeed(feed.url);
        feedData.articles.forEach(article => {
          article.feedTitle = feed.title;
          allArticles.push(article);
        });
      } catch (error) {
        console.error(`Failed to load feed ${feed.url}:`, error);
      }
    }

    allArticles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
    setArticles(allArticles);
    setLoading(false);
  };

  const addFeed = async (url: string) => {
    setError('');

    if (!url) {
      setError('URLを入力してください');
      return;
    }

    if (feeds.some(feed => feed.url === url)) {
      setError('このフィードは既に追加されています');
      return;
    }

    try {
      const feedData = await fetchFeed(url);
      const feed: Feed = {
        url: url,
        title: feedData.title || 'Unknown Feed',
        description: feedData.description || '',
        id: Date.now().toString()
      };

      const newFeeds = [...feeds, feed];
      setFeeds(newFeeds);
      saveFeedsToStorage(newFeeds);
      loadAllArticles(newFeeds);
    } catch (error) {
      setError(`フィードの追加に失敗しました: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const removeFeed = (feedId: string) => {
    const newFeeds = feeds.filter(feed => feed.id !== feedId);
    setFeeds(newFeeds);
    saveFeedsToStorage(newFeeds);
    if (newFeeds.length > 0) {
      loadAllArticles(newFeeds);
    } else {
      setArticles([]);
    }
  };

  return {
    feeds,
    articles,
    error,
    loading,
    addFeed,
    removeFeed,
  };
};