import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const Custom: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'Heading 1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading é um `h2`, mas você pode mudar o elemento HTML com a prop `as`.',
      },
    },
  },
}
