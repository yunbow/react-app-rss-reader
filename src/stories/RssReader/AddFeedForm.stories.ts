import type { Meta, StoryObj } from '@storybook/react';
import { AddFeedForm } from '../../features/rss-reader/components/AddFeedForm';

const meta: Meta<typeof AddFeedForm> = {
  title: 'Features/RssReader/Components/AddFeedForm',
  component: AddFeedForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onAddFeed: (url: string) => console.log('Add feed:', url),
  },
};

export const WithError: Story = {
  args: {
    onAddFeed: (url: string) => console.log('Add feed:', url),
    error: 'フィードの追加に失敗しました',
  },
};