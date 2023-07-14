import type { Meta, StoryObj } from '@storybook/react';

import CustomSelect from './CustomSelect';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/CustomSelect',
  component: CustomSelect,
  argTypes: { 
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
} satisfies Meta<typeof CustomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'primary',
    size: 'default',
    children: 'select',
  },
};


