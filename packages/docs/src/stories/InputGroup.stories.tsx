import type { Meta, StoryObj } from '@storybook/react'
import {
  Flex,
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
    error: 'Campo obrigatório',
    children: <Input />,
  },
  argTypes: {
    onChange: { action: 'changed' },
    required: { control: 'boolean' },
    info: { control: 'text' },
    error: { control: 'text' },
    children: { control: false },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
  decorators: [
    (Story) => (
      <Flex
        direction="column"
        style={{
          width: '100%',
          height: '220px',
        }}
      >
        {Story()}
      </Flex>
    ),
  ],
} as Meta<InputGroupProps>

export const Primary: StoryObj<InputGroupProps> = {}
