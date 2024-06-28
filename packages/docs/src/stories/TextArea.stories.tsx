import type { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaProps } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Data Entry/TextArea',
  component: TextArea,
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
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}
