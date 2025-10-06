import React from 'react';
import { useRSSReader } from '../../../hooks/useRSSReader';
import { Text } from '../../atoms/Text';
import { AddFeedForm } from '../../molecules/AddFeedForm';
import { FeedItem } from '../../molecules/FeedItem';
import { ArticleItem } from '../../molecules/ArticleItem';
import styles from './RSSReader.module.css';

export const RSSReader: React.FC = () => {
  const { feeds, articles, error, loading, addFeed, removeFeed } = useRSSReader();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Text variant="title">RSS Reader</Text>
      </header>

      <AddFeedForm onAddFeed={addFeed} error={error} />

      <div className={styles.feedsList}>
        {feeds.length === 0 ? (
          <Text variant="noFeeds">フィードを追加してください</Text>
        ) : (
          feeds.map(feed => (
            <FeedItem key={feed.id} feed={feed} onRemove={removeFeed} />
          ))
        )}
      </div>

      {feeds.length > 0 && (
        <div className={styles.articles}>
          <h2>最新記事</h2>
          {loading ? (
            <Text variant="loading">記事を読み込み中...</Text>
          ) : articles.length === 0 ? (
            <Text variant="loading">記事がありません</Text>
          ) : (
            articles.map((article, index) => (
              <ArticleItem key={`${article.guid}-${index}`} article={article} />
            ))
          )}
        </div>
      )}
    </div>
  );
};