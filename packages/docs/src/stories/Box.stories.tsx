import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Example Box Element</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          backgroundColor: '$slate200',
          height: '160px',
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
