import type { Meta, StoryObj } from '@storybook/react';
import { RSSReaderApp } from '../../features/rss-reader/RSSReaderApp';

const meta: Meta<typeof RSSReaderApp> = {
  title: 'Features/RssReader/RSSReaderApp',
  component: RSSReaderApp,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};