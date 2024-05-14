import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Typography/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/TECADI.png',
    alt: 'Tecadi Logo',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
