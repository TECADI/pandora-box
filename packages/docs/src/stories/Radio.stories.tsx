import type { Meta, StoryObj } from '@storybook/react'
import {
  InputGroup,
  Radio,
  RadioProps,
} from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Typography/Radio',
  component: Radio,
  args: {
    name: 'name',
    label: 'Teste de Radio',
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
  decorators: [
    (Story) => (
      <InputGroup
        name="radio"
        label="Teste de Radio"
        required
        info="Selecione ao menos uma opção"
      >
        {Story()}
      </InputGroup>
    ),
  ],
} as Meta<RadioProps>

export const Primary: StoryObj<RadioProps> = {}
