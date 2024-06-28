import { colors } from '@pandora-box-tecadi/design-system'
import { Select as AntdSelect } from 'antd'
import styled from 'styled-components'

export const SelectComponent = styled(AntdSelect)`
  .ant-select-selector {
    border: 1px solid ${colors.slate200} !important;
    background-color: ${colors.slate200} !important;

    width: 100% !important;
    height: 2.5rem !important;

    border-radius: 0.25rem !important;
    color: ${colors.slate600} !important;

    .ant-select-selection-placeholder {
      color: ${colors.gray500} !important;
    }

    &:hover {
      border: 1px solid ${colors.slate300} !important;
    }

    &:focus-within {
      outline: 0 !important;
      border: 1px solid ${colors.slate400} !important;
      box-shadow: 0 0 0 0 !important;
    }
  }

  .ant-select-arrow {
    margin-top: 0 !important;
  }

  .ant-select-open {
    color: red !important;
  }
`
