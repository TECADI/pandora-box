import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Container,
  ContainerProps,
  Text,
} from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Surfaces/Container',
  component: Container,
  args: {
    children: <Text>Example Content in Container</Text>,
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
          height: '160px',
          border: '1px solid $slate500',
          borderRadius: '$xs',
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<ContainerProps>

export const Primary: StoryObj<ContainerProps> = {}
