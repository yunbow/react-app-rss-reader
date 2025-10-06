import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'remove'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '追加',
    variant: 'primary',
  },
};

export const Remove: Story = {
  args: {
    children: '削除',
    variant: 'remove',
  },
};

export const Disabled: Story = {
  args: {
    children: '無効',
    disabled: true,
  },
};