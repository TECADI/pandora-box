import { Variants } from '../../utils/types'
import { TableComponent } from './styles'
import { TableProps as TablePropsAntd } from 'antd'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

export interface TableProps extends TablePropsAntd {
  colorSchema?: Variants
  fullSize?: boolean
  rowSelection?: {
    type: 'checkbox' | 'radio'
    onChange?: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => void
  }
  pagination?: {
    total: number
    pageSize: number
    current: number
    onChange: (page: number, pageSize: number) => void
  }
  style?: React.CSSProperties
}

export function Table(props: TableProps) {
  return (
    <TableComponent
      dataSource={props.dataSource}
      columns={props.columns}
      rowSelection={props.rowSelection}
      {...props}
    />
  )
}
