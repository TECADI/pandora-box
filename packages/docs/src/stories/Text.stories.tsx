import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    size: 'md',
    as: 'span',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
    },
    as: {
      options: ['span', 'p'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
