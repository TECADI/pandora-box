import { colors } from '@pandora-box-tecadi/design-system'
import { Radio } from 'antd'
import styled from 'styled-components'

export const RadioButton = styled(Radio.Button)``

export const RadioGroupComponent = styled(Radio.Group)`
  display: flex;
  gap: 12px;

  .ant-radio-button-wrapper {
    border-radius: 4px !important;
    padding: 0 16px;
    height: 40px;

    border: 1px solid ${colors.slate200};

    ::before {
      display: none;
    }

    &:hover {
      border-color: ${colors.slate300};
      color: ${colors.slate500};
      background-color: ${colors.slate100};
    }
  }

  .ant-radio-button-wrapper-checked {
    background-color: ${colors.slate500} !important;
    border-color: ${colors.slate500} !important;
  }

  .ant-radio-button-wrapper:not(.ant-radio-button-wrapper-disabled)::before {
    display: none;
  }
`
