import type { Meta, StoryObj } from '@storybook/react'
import { Box, Header, HeaderProps } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Components/Header',
  component: Header,
  args: {},
  decorators: [
    (Story) => (
      <>
        {Story()}

        <Box
          css={{
            backgroundColor: '$slate100',
            height: '160px',
          }}
        ></Box>
      </>
    ),
  ],
} as Meta<HeaderProps>

export const Primary: StoryObj<HeaderProps> = {
  args: {},
}
