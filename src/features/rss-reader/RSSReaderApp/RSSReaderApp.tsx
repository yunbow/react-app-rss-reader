import React from 'react';
import { useRSSReader } from '../useRSSReader';
import { Text } from '../../../components/Text';
import { AddFeedForm } from '../components/AddFeedForm';
import { FeedItem } from '../components/FeedItem';
import { ArticleItem } from '../components/ArticleItem';
import styles from './RSSReaderApp.module.css';

export const RSSReaderApp: React.FC = () => {
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