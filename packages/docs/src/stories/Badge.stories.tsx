import type { Meta, StoryObj } from '@storybook/react'
import { Badge, BadgeProps } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Components/Badge',
  component: Badge,

  args: {
    title: 'Badge Text',
    variant: 'primary',
    rounded: false,
  },

  argTypes: {
    variant: {
      options: [
        'primary',
        'success',
        'danger',
        'warning',
        'info',
        'magenta',
        'volcano',
        'cyan',
        'geekblue',
        'lime',
        'gold',
        'orange',
        'teal',
        'skyblue',
        'primary-light',
        'success-light',
        'danger-light',
        'warning-light',
        'info-light',
        'magenta-light',
        'volcano-light',
        'cyan-light',
        'geekblue-light',
        'lime-light',
        'gold-light',
        'orange-light',
        'teal-light',
        'skyblue-light',
      ],
      control: { type: 'select' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
  },
} as Meta<BadgeProps>

export const Primary: StoryObj<BadgeProps> = {}
