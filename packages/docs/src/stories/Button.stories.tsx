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
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

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
