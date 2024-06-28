import type { Meta, StoryObj } from '@storybook/react'
import {
  InputGroup,
  Select,
  SelectProps,
} from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Data Entry/Select',
  component: Select,
  args: {
    size: 'md',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    showSearch: false,
    placeholder: 'Selecione uma opção',
    mode: undefined,
  },
  argTypes: {
    options: { control: false },
    placeholder: { control: false },
    onChange: { control: false },

    showSearch: { control: 'boolean' },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    mode: {
      control: { type: 'radio' },
      options: ['multiple', 'tags', undefined],
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
