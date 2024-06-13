import { TableProps } from '.'
import { styled } from '../../styles'

import { Table as TableAntd } from 'antd'
import { getVariant } from '../../utils/getVariants'
import { colors } from '@pandora-box-tecadi/design-system'

export const TableComponent = styled(TableAntd)<TableProps>`
  ${({ fullSize }) => {
    if (fullSize) {
      return `
  width: 100%;
`
    }
  }}

  .ant-table {
    border-radius: 8px;
    overflow: hidden;
  }

  td {
    font-weight: 500;
    color: ${colors.slate600} !important;
  }

  tr:last-child td:first-child {
    border-radius: 0 0 0 8px !important;
  }

  tr:last-child td:last-child {
    border-radius: 0 0 8px 0 !important;
  }

  th {
    font-weight: 500 !important;
    border-bottom: 0 !important;
    color: ${colors.slate50} !important;
  }

  td,
  th {
    padding: 10px 16px !important;
  }

  tr:last-child td {
    border-bottom: solid 1px ${colors.slate200} !important;
  }

  tr:not(:last-child) td {
    border-bottom: solid 1px ${colors.slate200} !important;
  }

  ${({ colorSchema }) => {
    const variantStyles = getVariant({ colorSchema })
    return `

    .ant-pagination-item-active {
      border-color: ${variantStyles.backgroundColor} !important;
      
      a {
        color: ${variantStyles.backgroundColor} !important;
      }
    }

    th {
      background-color: ${variantStyles.backgroundColor} !important;
      border-top: solid 1px ${variantStyles.backgroundColor} !important;

      &:first-child {
        border-left: solid 1px ${variantStyles.backgroundColor} !important;
      }

      &:last-child {
        border-right: solid 1px ${variantStyles.backgroundColor} !important;
      }
    }`
  }}
`
