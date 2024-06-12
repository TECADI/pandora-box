import type { Meta, StoryObj } from '@storybook/react'
import { Badge, BadgeProps } from '@pandora-box-tecadi/desing-ui-react'
import { Variants } from '../utils/types'

export default {
  title: 'Components/Badge',
  component: Badge,

  args: {
    title: 'Badge Text',
    colorSchema: 'primary',
    size: 'md',
    rounded: false,
  },

  argTypes: {
    colorSchema: {
      options: Variants,
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
  },
} as Meta<BadgeProps>

export const Primary: StoryObj<BadgeProps> = {}
