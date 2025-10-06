import React, { useState } from 'react';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Text';
import styles from './AddFeedForm.module.css';

export interface AddFeedFormProps {
  onAddFeed: (url: string) => void;
  error?: string;
}

export const AddFeedForm: React.FC<AddFeedFormProps> = ({
  onAddFeed,
  error,
}) => {
  const [feedUrl, setFeedUrl] = useState('');

  const handleSubmit = () => {
    if (feedUrl.trim()) {
      onAddFeed(feedUrl.trim());
      setFeedUrl('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={styles.addFeed}>
      <div className={styles.feedInput}>
        <Input
          type="url"
          value={feedUrl}
          onChange={setFeedUrl}
          onKeyPress={handleKeyPress}
          placeholder="RSS フィードのURL を入力してください..."
        />
        <Button onClick={handleSubmit}>
          追加
        </Button>
      </div>
      {error && (
        <Text variant="error">
          {error}
        </Text>
      )}
    </div>
  );
};