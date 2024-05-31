import type { Meta, StoryObj } from '@storybook/react'
import {
  BreadCrumb,
  BreadCrumbProps,
} from '@pandora-box-tecadi/desing-ui-react'
import { FaFile } from 'react-icons/fa6'

export default {
  title: 'Components/BreadCrumb',
  component: BreadCrumb,
  args: {
    icon: <FaFile size={22} />,
    page: 'Page',
    desc: 'Description',
  },
  argTypes: {
    icon: { control: false },
    page: { control: 'text' },
    desc: { control: 'text' },
  },
} as Meta<BreadCrumbProps>

export const Primary: StoryObj<BreadCrumbProps> = {}
