import type { Meta, StoryObj } from '@storybook/react';
import { RSSReader } from '../components/organisms/RSSReader';

const meta: Meta<typeof RSSReader> = {
  title: 'Organisms/RSSReader',
  component: RSSReader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};