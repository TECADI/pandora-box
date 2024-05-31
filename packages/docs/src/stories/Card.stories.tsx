import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps, Text } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Layout/Card',
  component: Card,
  args: {
    children: (
      <>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </>
    ),
  },
  argTypes: {
    children: { control: false },
  },
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}
