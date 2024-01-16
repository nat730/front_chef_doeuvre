import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    color: 'red',
    label: 'Button',
  },
};

export const sfdfdsffsd: Story = {
  args: {
    size: 'H1',
    label: 'qsdsdsqdsqdsq',
  },
};


export const Warning: Story = {
  args: {
    primary: true,
    label: 'Delete now',
    color: 'red',
  }
};

export const dsqdsq: Story = {
  args: {
    primary: true,
    label: 'Delete now',
    color: 'red',
  }
};