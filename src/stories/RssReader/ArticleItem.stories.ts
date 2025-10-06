import type { Meta, StoryObj } from '@storybook/react';
import { ArticleItem } from '../../features/rss-reader/components/ArticleItem';

const meta: Meta<typeof ArticleItem> = {
  title: 'Features/RssReader/Components/ArticleItem',
  component: ArticleItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    article: {
      title: 'サンプル記事タイトル',
      link: 'https://example.com/article1',
      description: 'これはサンプル記事の説明です。実際の記事では、もっと長い説明が含まれる場合があります。',
      pubDate: '2024-01-01T12:00:00Z',
      guid: 'article1',
      feedTitle: 'サンプルフィード',
    },
  },
};

export const LongArticle: Story = {
  args: {
    article: {
      title: 'とても長い記事タイトルの例です - 実際のRSSフィードではこのような長いタイトルの記事もよくあります',
      link: 'https://example.com/long-article',
      description: 'これは非常に長い記事の説明です。実際のRSSフィードでは、記事の内容が詳細に説明されることが多く、このような長い説明文が含まれる場合があります。この説明は200文字を超えるとカットされて表示されます。更に長い内容が続いても、適切に省略されて表示されるはずです。',
      pubDate: '2024-01-15T09:30:00Z',
      guid: 'long-article',
      feedTitle: 'ニュースフィード',
    },
  },
};