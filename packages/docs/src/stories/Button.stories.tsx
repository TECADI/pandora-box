import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@pandora-box-tecadi/desing-ui-react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Typography/Button',
  component: Button,

  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },

  argTypes: {
    onClick: { action: 'clicked' },

    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

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
