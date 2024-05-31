import type { Meta, StoryObj } from '@storybook/react'
import {
  Flex,
  Sidebar,
  SidebarProps,
} from '@pandora-box-tecadi/desing-ui-react'
import { IoMdHome, IoIosSettings } from 'react-icons/io'
import { FaUserAlt } from 'react-icons/fa'

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
  args: {
    size: 'md',
    logoUrl: 'https://i.ibb.co/ynDHcpT/nav-logo-1.png',
    navigationList: [
      {
        label: 'Dashboard',
        key: 'dashboard',
        icon: <IoMdHome size={24} />,
      },
      {
        label: 'Profile',
        key: 'profile',
        icon: <FaUserAlt size={24} />,
      },
      {
        label: 'Settings',
        key: 'settings',
        icon: <IoIosSettings size={24} />,
      },
    ],
  },
  argTypes: {
    onChange: { action: 'changed' },

    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
  decorators: [
    (Story) => (
      <Flex
        style={{
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {Story()}
      </Flex>
    ),
  ],
} as Meta<SidebarProps>

export const Primary: StoryObj<SidebarProps> = {}
