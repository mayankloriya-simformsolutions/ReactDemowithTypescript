import type { Meta, StoryObj } from '@storybook/react';

import CustomButton from './CustomButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: { 
    type: {
        options: ['primary', 'default', 'link', 'text'],
        control: { type: 'select' },
    },
    size: {
      options: ['small', 'middle', 'large'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
    children: {  
      control: { type: 'text' }, // Automatically inferred when 'options' is defined
    },
  },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Button',
    size: 'middle',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    type: 'default',
    size: 'middle',
  },
};

export const Link: Story = {
  args: {
    size: 'middle',
    children: 'Button',
    type: 'link',
  },
};

export const Text: Story = {
  args: {
    size: 'middle',
    children: 'Button',
    type: 'text',
  },
};
