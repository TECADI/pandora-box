import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xs',
        'xxs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const Custom: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Heading 1',
  },
}
