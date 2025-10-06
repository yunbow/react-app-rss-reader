import React from 'react';
import { Feed } from '../../types';
import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Text';
import styles from './FeedItem.module.css';

export interface FeedItemProps {
  feed: Feed;
  onRemove: (feedId: string) => void;
}

export const FeedItem: React.FC<FeedItemProps> = ({
  feed,
  onRemove,
}) => {
  const handleRemove = () => {
    onRemove(feed.id);
  };

  return (
    <div className={styles.feedItem}>
      <div className={styles.feedHeader}>
        <Text variant="feedTitle">
          {feed.title}
        </Text>
        <Button variant="remove" onClick={handleRemove}>
          削除
        </Button>
      </div>
      <Text variant="description">
        {feed.description}
      </Text>
    </div>
  );
};