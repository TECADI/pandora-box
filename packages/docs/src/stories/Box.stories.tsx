import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@pandora-box/desing-ui-react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Example Box Element</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
