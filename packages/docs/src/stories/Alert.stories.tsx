import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertProps } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Components/Alert',
  component: Alert,

  args: {
    title: 'Alert Title',
    description: 'Alert Description',
    border: 'none',
    variant: 'primary',
    hasIcon: true,
  },

  argTypes: {
    hasIcon: {
      control: { type: 'boolean' },
    },
    border: {
      options: ['none', 'solid', 'dashed', 'dotted'],
      control: { type: 'inline-radio' },
    },
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
  },
} as Meta<AlertProps>

export const Primary: StoryObj<AlertProps> = {
  args: {
    variant: 'primary',
  },
}
