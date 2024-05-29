import type { Meta, StoryObj } from '@storybook/react'
import {
  InputGroup,
  Select,
  SelectProps,
} from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Typography/Select',
  component: Select,
  args: {
    size: 'md',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
  argTypes: {
    onChange: { action: 'changed' },
    options: { control: false },

    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },

  decorators: [
    (Story) => (
      <InputGroup
        name="select"
        label="Teste de Select"
        required
        info="Selecione uma opção"
      >
        {Story()}
      </InputGroup>
    ),
  ],
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {}
