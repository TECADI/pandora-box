import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertProps } from '@pandora-box-tecadi/desing-ui-react'
import { Variants } from '../utils/types'

export default {
  title: 'Components/Alert',
  component: Alert,

  args: {
    title: 'Alert Title',
    description: 'Alert Description',
    border: 'none',
    colorSchema: 'primary',
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
    colorSchema: {
      options: Variants,
      control: { type: 'select' },
    },
  },
} as Meta<AlertProps>

export const Primary: StoryObj<AlertProps> = {}
