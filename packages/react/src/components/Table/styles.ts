import { TableProps } from '.'
import { styled } from '../../styles'

import { Table as TableAntd } from 'antd'
import { getVariant } from '../../utils/getVariants'
import { colors } from '@pandora-box-tecadi/design-system'

export const TableComponent = styled(TableAntd)<TableProps>`
  td {
    font-weight: 500;
  }

  tr:last-child td:first-child {
    border-radius: 0 0 0 8px !important;
  }

  tr:last-child td:last-child {
    border-radius: 0 0 8px 0 !important;
  }

  th {
    color: ${colors.slate100} !important;
    font-weight: 500 !important;
  }

  td,
  th {
    padding: 10px 16px !important;
  }

  ${({ variant }) => {
    const variantStyles = getVariant({ variant })
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

    }

    td {
      &:first-child {
        border-left: solid 1px ${variantStyles.backgroundColor}77 !important;
      }

      &:last-child {
        border-right: solid 1px ${variantStyles.backgroundColor}77 !important;
      }
    }

    tr:last-child td {
      border-bottom: solid 1px ${variantStyles.backgroundColor}77 !important;
    }

    tr:not(:last-child) td {
       border-bottom: solid 1px  ${variantStyles.backgroundColor}44 !important;
    }
    `
  }}
`
