import type { Meta, StoryObj } from '@storybook/react'
import { Flex, Table, TableProps } from '@pandora-box-tecadi/desing-ui-react'
import { colors } from '@pandora-box-tecadi/design-system'
import { Variants } from '../utils/types'

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Idade',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Endereço',
    dataIndex: 'address',
    key: 'address',
  },
]

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]

export default {
  title: 'Components/Table',
  component: Table,

  args: {
    colorSchema: 'teal',
    columns,
    dataSource,
  },

  argTypes: {
    colorSchema: {
      options: Variants,
      control: { type: 'select' },
    },
    columns: { table: { disable: true } },
    dataSource: { table: { disable: true } },

    fullSize: {
      control: { type: 'boolean' },
    },
  },

  decorators: [
    (Story) => (
      <Flex
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: colors.slate200,
          padding: '1.6rem',
        }}
      >
        {Story()}
      </Flex>
    ),
  ],
} as Meta<TableProps>

export const Primary: StoryObj<TableProps> = {}
