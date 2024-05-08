import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Typography/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/ManuelMolina02.png',
    alt: 'Manuel Molina',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
