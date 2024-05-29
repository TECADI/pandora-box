import type { Meta, StoryObj } from '@storybook/react'
import {
  InputGroup,
  Input,
  InputProps,
} from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Typography/Input',
  component: Input,
  args: {
    size: 'md',
  },
  argTypes: {
    onChange: { action: 'changed' },

    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
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
