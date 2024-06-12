import { styled } from '../../styles'
import { MultiSelectProps } from '.'
import { Select as MultiSelectAntd } from 'antd'
import { colors } from '@pandora-box-tecadi/design-system'

const inputSizes = {
  sm: {
    padding: '.188rem',
    fontSize: '.75rem',
  },
  md: {
    padding: '.5rem',
    fontSize: '.95rem',
  },
  lg: {
    padding: '.813rem',
    fontSize: '1.05rem',
  },
}

export const MultiSelectComponent = styled(MultiSelectAntd)<MultiSelectProps>`
  .ant-select-selector {
    border: 1px solid ${colors.slate300} !important;
    border-radius: 0.25rem !important;
    color: ${colors.slate600} !important;

    ${({ size }) => inputSizes[size!]}

    &:hover {
      border: 1px solid ${colors.slate400} !important;
    }

    &:focus-within {
      outline: 0 !important;
      border: 1px solid ${colors.slate500} !important;
      box-shadow: 0 0 0 0 !important;
    }
  }

  .ant-select-open {
    color: red !important;
  }
`
