import { styled } from '../../styles'
import { InputProps } from '.'
import { colors } from '@pandora-box-tecadi/design-system'
import { Input as InputAntd } from 'antd'
import { getVariant } from '../../utils/getVariants'

const inputSizes = {
  sm: {
    padding: '.4744rem',
    fontSize: '.75rem',
  },
  md: {
    padding: '.6rem',
    fontSize: '.988rem',
  },
  lg: {
    padding: '.865rem',
    fontSize: '1.048rem',
  },
}

export const InputComponent = styled(InputAntd)<InputProps>`
  border: 1px solid ${colors.slate200};
  background-color: ${colors.slate200};
  border-radius: 0.25rem;
  font-size: 1rem;
  color: ${colors.slate600};
  transition:
    background-color 0.3s ease-in-out,
    border 0.3s ease-in-out;

  ${({ size }) => inputSizes[size!]}

  &:focus {
    outline: 0;
    background-color: ${colors.slate200};
    box-shadow: 0 0 0 0 !important;
  }

  &:hover {
    background-color: ${colors.slate200};
  }

  ${({ colorSchema }) => {
    const variant = getVariant({ colorSchema }).backgroundColor
    return `
      &:hover {
        border: 1px solid ${variant}55;
      }


      &:focus-within {
        border: 1px solid ${variant};
      }
    `
  }}
`

export const PasswordComponent = styled(InputAntd.Password)<InputProps>`
  border: 1px solid ${colors.slate200};
  background-color: ${colors.slate200};
  border-radius: 0.25rem;
  font-size: 1rem;
  color: ${colors.slate600};

  ${({ size }) => inputSizes[size!]}

  &:focus {
    outline: 0;
    background-color: ${colors.slate200};
    box-shadow: 0 0 0 0 !important;
  }

  &:hover {
    background-color: ${colors.slate200};
  }

  ${({ colorSchema }) => {
    const variant = getVariant({ colorSchema }).backgroundColor
    return `
      &:hover {
        border: 1px solid ${variant}55;
      }


      &:focus-within {
        border: 1px solid ${variant};
        background-color: ${colors.slate200};
        box-shadow: 0 0 0 0 !important;
      }
    `
  }}
`
