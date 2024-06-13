import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@pandora-box-tecadi/desing-ui-react'
// import { ArrowRight } from 'phosphor-react'
import { BsFillSendFill } from 'react-icons/bs'
import { Variants } from '../utils/types'

export default {
  title: 'Components/Button',
  component: Button,

  args: {
    children: (
      <>
        Enviar <BsFillSendFill />
      </>
    ),
    colorSchema: 'teal',
    size: 'md',
    disabled: false,
  },

  argTypes: {
    onClick: { action: 'clicked' },

    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },

    colorSchema: {
      options: Variants,
      control: { type: 'select' },
    },

    loading: {
      control: { type: 'boolean' },
    },

    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
/*

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next step
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const Loading: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    loading: true,
  },
}

*/
