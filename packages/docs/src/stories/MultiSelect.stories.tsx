import type { Meta, StoryObj } from '@storybook/react'
import {
  InputGroup,
  MultiSelect,
  MultiSelectProps,
} from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Data Entry/MultiSelect',
  component: MultiSelect,
  args: {
    size: 'md',
    mode: 'multiple',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      { value: '4', label: 'Option 4' },
      { value: '11', label: 'Option 11' },
      { value: '21', label: 'Option 21' },
      { value: '31', label: 'Option 31' },
      { value: '41', label: 'Option 41' },
      { value: '21', label: 'Option 12' },
      { value: '21', label: 'Option 22' },
      { value: '21', label: 'Option 32' },
      { value: '21', label: 'Option 42' },
    ],
  },
  argTypes: {
    onChange: { action: 'changed' },

    options: { control: false },
    mode: {
      control: { type: 'radio' },
      options: ['multiple', 'tags'],
    },

    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
  decorators: [
    (Story) => (
      <InputGroup
        name="multi-select"
        label="Teste de MultiSelect"
        required
        info="Selecione ao menos uma opção"
      >
        {Story()}
      </InputGroup>
    ),
  ],
} as Meta<MultiSelectProps>

export const Primary: StoryObj<MultiSelectProps> = {}
