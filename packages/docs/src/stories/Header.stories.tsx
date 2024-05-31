import type { Meta, StoryObj } from '@storybook/react'
import {
  Avatar,
  BreadCrumb,
  Flex,
  Header,
  HeaderProps,
} from '@pandora-box-tecadi/desing-ui-react'
import { IoMdHome } from 'react-icons/io'

export default {
  title: 'Layout/Header',
  component: Header,
  args: {
    children: (
      <>
        <BreadCrumb
          icon={<IoMdHome size={24} />}
          page="Home"
          desc="Main Page"
        />
        <Avatar rounded />
      </>
    ),
  },

  decorators: [
    (Story) => (
      <Flex
        style={{
          width: '100%',
          height: '220px',
        }}
      >
        {Story()}
      </Flex>
    ),
  ],
} as Meta<HeaderProps>

export const Primary: StoryObj<HeaderProps> = {}
