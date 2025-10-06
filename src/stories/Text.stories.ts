import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'title', 'feedTitle', 'articleTitle', 'meta', 'description', 'noFeeds', 'loading', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'これは通常のテキストです',
    variant: 'text',
  },
};

export const Title: Story = {
  args: {
    children: 'RSS Reader',
    variant: 'title',
  },
};

export const FeedTitle: Story = {
  args: {
    children: 'サンプルフィードタイトル',
    variant: 'feedTitle',
  },
};

export const ArticleTitle: Story = {
  args: {
    children: 'サンプル記事タイトル',
    variant: 'articleTitle',
    href: 'https://example.com',
  },
};

export const MetaText: Story = {
  args: {
    children: 'サンプルフィード • 2024-01-01 12:00',
    variant: 'meta',
  },
};

export const Error: Story = {
  args: {
    children: 'エラーが発生しました',
    variant: 'error',
  },
};

export const Loading: Story = {
  args: {
    children: '読み込み中...',
    variant: 'loading',
  },
};