import type { Meta, StoryObj } from '@storybook/react'
import { Flex, FlexProps, Text } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Surfaces/Flex',
  component: Flex,
  args: {
    children: (
      <>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </>
    ),
    direction: 'row',
    justify: 'flex-start',
    align: 'flex-start',
    wrap: 'nowrap',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    direction: {
      options: ['row', 'column'],
      control: { type: 'inline-radio' },
    },
    justify: {
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
      ],
      control: { type: 'inline-radio' },
    },
    align: {
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      control: { type: 'inline-radio' },
    },
    wrap: {
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      control: { type: 'inline-radio' },
    },
  },
  decorators: [(Story) => <div>{Story()}</div>],
} as Meta<FlexProps>

export const Primary: StoryObj<FlexProps> = {}
