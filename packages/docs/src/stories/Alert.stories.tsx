import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertProps } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Typography/Alert',
  component: Alert,

  args: {
    title: 'Alert Title',
    description: 'Alert Description',
    variant: 'primary',
  },

  argTypes: {
    onClick: { action: 'clicked' },

    variant: {
      options: [
        'success',
        'danger',
        'warning',
        'info',
        'primary',
        'success-light',
        'danger-light',
        'warning-light',
        'info-light',
        'primary-light',
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
