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
  },
  argTypes: {
    onChange: { action: 'changed' },
    required: { control: 'boolean' },
    info: { control: 'text' },
    as: {
      control: { type: 'radio' },
      options: ['input', 'textarea', 'select'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
} as Meta<InputGroupProps>

export const Primary: StoryObj<InputGroupProps> = {}
export const Select: StoryObj<InputGroupProps> = {
  args: {
    as: 'select',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '300px', height: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Textarea: StoryObj<InputGroupProps> = {
  args: {
    as: 'textarea',
  },
}
