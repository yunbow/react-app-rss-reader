import type { Meta, StoryObj } from '@storybook/react';
import { FeedItem } from '../features/rss-reader/components/FeedItem';

const meta: Meta<typeof FeedItem> = {
  title: 'Components/FeedItem',
  component: FeedItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    feed: {
      id: '1',
      title: 'サンプルフィード',
      description: 'これはサンプルフィードの説明です',
      url: 'https://example.com/feed.xml',
    },
    onRemove: (feedId: string) => console.log('Remove feed:', feedId),
  },
};

export const LongTitle: Story = {
  args: {
    feed: {
      id: '2',
      title: 'とても長いフィードタイトルの例です - 実際のフィードではこのような長いタイトルもあります',
      description: 'これは長いタイトルを持つフィードの説明です。実際の使用では、このような長い説明も表示される可能性があります。',
      url: 'https://example.com/long-feed.xml',
    },
    onRemove: (feedId: string) => console.log('Remove feed:', feedId),
  },
};