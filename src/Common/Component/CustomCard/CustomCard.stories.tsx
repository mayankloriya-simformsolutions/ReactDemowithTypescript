import type { Meta, StoryObj } from '@storybook/react';

import CustomCard from './CustomCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/CustomCard',
  component: CustomCard,
  argTypes: { 
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
} satisfies Meta<typeof CustomCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    size: 'default',
    children: 'Card',
  },
};
