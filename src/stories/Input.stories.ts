import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/atoms/Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'テキストを入力してください',
    onChange: () => {},
  },
};

export const URL: Story = {
  args: {
    value: '',
    type: 'url',
    placeholder: 'RSS フィードのURL を入力してください...',
    onChange: () => {},
  },
};

export const WithValue: Story = {
  args: {
    value: 'サンプルテキスト',
    onChange: () => {},
  },
};