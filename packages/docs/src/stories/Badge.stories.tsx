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
        'primary-light',
        'success-light',
        'danger-light',
        'warning-light',
        'info-light',
      ],
      control: { type: 'radio' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
  },
} as Meta<BadgeProps>

export const Primary: StoryObj<BadgeProps> = {}
