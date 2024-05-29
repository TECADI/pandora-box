import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Typography/Checkbox',
  component: Checkbox,
  args: {
    name: 'name',
    label: 'Teste de Checkbox',
    required: true,
    info: 'Selecione ao menos uma opção',
    size: 'md',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
  argTypes: {
    onChange: { action: 'changed' },
    required: { control: 'boolean' },
    info: { control: 'text' },
    options: { control: false },

    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
