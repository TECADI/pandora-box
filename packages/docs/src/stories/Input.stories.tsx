import type { Meta, StoryObj } from '@storybook/react'
import {
  InputGroup,
  Input,
  InputProps,
} from '@pandora-box-tecadi/desing-ui-react'
import { Variants } from '../utils/types'

export default {
  title: 'Data Entry/Input',
  component: Input,
  args: {
    size: 'md',
    colorSchema: 'teal',
    maxLength: 10,
  },
  argTypes: {
    onChange: { action: 'changed' },

    colorSchema: {
      options: Variants,
      control: { type: 'select' },
    },

    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },

    type: {
      control: { type: 'radio' },
      options: ['text', 'password', 'email', 'number', 'tel'],
    },
  },

  decorators: [
    (Story) => (
      <InputGroup
        name="Input"
        label="Teste de Input"
        required
        info="Selecione uma opção"
      >
        {Story()}
      </InputGroup>
    ),
  ],
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {}
