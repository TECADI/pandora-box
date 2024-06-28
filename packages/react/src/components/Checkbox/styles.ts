import { colors } from '@pandora-box-tecadi/design-system'
import styled from 'styled-components'

import { Checkbox } from 'antd'

export const CheckboxGroupComponent = styled(Checkbox.Group)`
  .ant-checkbox-inner {
    display: none !important;
  }

  .ant-checkbox-wrapper {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #f1f1f1;

    transition: background-color 0.2s;
  }

  .ant-checkbox-wrapper:hover {
    background-color: #f1f1f1;
  }

  .ant-checkbox-wrapper-checked {
    background-color: ${colors.slate600};
    color: ${colors.slate50};

    &:hover {
      background-color: ${colors.slate500};
    }
  }
`

export const CheckboxItem = styled.div<{ checked: boolean }>`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border-radius: 0.25rem;
  border: 1px solid #f1f1f1;
  background-color: transparent;

  &:hover {
    background-color: #f1f1f1;
  }

  transition: background-color 0.2s;

  ${({ checked }) => {
    if (checked) {
      return `
        background-color: ${colors.slate600};
        color: ${colors.slate50};

        &:hover {
          background-color:  ${colors.slate500};
        }
      `
    }
  }}
`

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
