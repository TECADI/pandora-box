import { Variants } from '../../utils/types'
import { TableComponent } from './styles'
import { TableProps as TablePropsAntd } from 'antd'

export interface TableProps extends TablePropsAntd {
  variant?: Variants
}

export function Table(props: TableProps) {
  return (
    <TableComponent
      dataSource={props.dataSource}
      columns={props.columns}
      variant={props.variant}
    />
  )
}
