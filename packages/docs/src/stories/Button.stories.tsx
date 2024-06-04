import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@pandora-box-tecadi/desing-ui-react'
// import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Components/Button',
  component: Button,

  args: {
    children: 'Click me',
    variant: 'info',
    size: 'md',
    disabled: false,
  },

  argTypes: {
    onClick: { action: 'clicked' },

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
      control: { type: 'radio' },
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
