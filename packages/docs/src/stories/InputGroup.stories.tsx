import type { Meta, StoryObj } from '@storybook/react'
import {
  Input,
  InputGroup,
  InputGroupProps,
} from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
  args: {
    name: 'name',
    label: 'Nome do Usuário',
    required: true,
    info: 'Informe seu nome completo',
    size: 'md',
    children: <Input />,
  },
  argTypes: {
    onChange: { action: 'changed' },
    required: { control: 'boolean' },
    info: { control: 'text' },

    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
} as Meta<InputGroupProps>

export const Primary: StoryObj<InputGroupProps> = {}
