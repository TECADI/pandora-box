import type { Meta, StoryObj } from '@storybook/react'
import {
  InputGroup,
  InputGroupProps,
} from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Typography/InputGroup',
  component: InputGroup,
  args: {
    name: 'name',
    label: 'Nome do Usuário',
    required: true,
    info: 'Informe seu nome completo',
    size: 'md',
    children: <input />,
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
