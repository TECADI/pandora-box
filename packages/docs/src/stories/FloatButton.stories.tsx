import type { Meta, StoryObj } from '@storybook/react'
import {
  FloatButton,
  FloatButtonProps,
} from '@pandora-box-tecadi/desing-ui-react'
import { FaFile } from 'react-icons/fa6'

export default {
  title: 'Components/FloatButton',
  component: FloatButton,

  args: {
    children: <FaFile />,
    variant: 'primary',
    size: 'md',
    disabled: false,
    title: 'Example tooltip title',
  },

  argTypes: {
    children: { control: { disable: true } },

    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },

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

    disabled: {
      control: { type: 'boolean' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
  },
} as Meta<FloatButtonProps>

export const Primary: StoryObj<FloatButtonProps> = {}
