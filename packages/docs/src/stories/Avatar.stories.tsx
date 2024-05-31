import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Components/Avatar',
  component: Avatar,

  args: {
    avatarUrl: 'https://github.com/ManuelMolina02.png',
    rounded: true,
    size: 'md',
  },

  argTypes: {
    avatarUrl: {
      control: {
        type: 'text',
      },
    },
    rounded: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    children: {
      control: {
        type: false,
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
