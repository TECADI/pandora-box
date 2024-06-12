import type { Meta, StoryObj } from '@storybook/react'
import {
  FloatButton,
  FloatButtonProps,
} from '@pandora-box-tecadi/desing-ui-react'
import { FaFile } from 'react-icons/fa6'
import { Variants } from '../utils/types'

export default {
  title: 'Components/FloatButton',
  component: FloatButton,

  args: {
    children: <FaFile />,
    colorSchema: 'primary',
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

    colorSchema: {
      options: Variants,
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
