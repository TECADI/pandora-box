import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableProps } from '@pandora-box-tecadi/desing-ui-react'

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
    variant: 'primary',
    columns,
    dataSource,
  },

  argTypes: {
    variant: {
      options: [
        'primary',
        'success',
        'danger',
        'warning',
        'info',
        'magenta',
        'volcano',
        'cyan',
        'geekblue',
        'lime',
        'gold',
        'orange',
        'teal',
        'skyblue',
        'primary-light',
        'success-light',
        'danger-light',
        'warning-light',
        'info-light',
        'magenta-light',
        'volcano-light',
        'cyan-light',
        'geekblue-light',
        'lime-light',
        'gold-light',
        'orange-light',
        'teal-light',
        'skyblue-light',
      ],
      control: { type: 'select' },
    },
    columns: { table: { disable: true } },
    dataSource: { table: { disable: true } },
  },
} as Meta<TableProps>

export const Primary: StoryObj<TableProps> = {}
