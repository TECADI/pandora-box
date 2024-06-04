import { styled } from '../../styles'
import { InputProps } from '.'
import { colors } from '@pandora-box-tecadi/design-system'
import { Input as InputAntd } from 'antd'

const inputSizes = {
  sm: {
    padding: '.5rem',
    fontSize: '.75rem',
  },
  md: {
    padding: '.7rem',
    fontSize: '.975rem',
  },
  lg: {
    padding: '.95rem',
    fontSize: '1.115rem',
  },
}

export const InputComponent = styled(InputAntd)<InputProps>`
  border: 1px solid ${colors.slate300};
  border-radius: 0.25rem;
  font-size: 1rem;
  color: ${colors.slate600};

  ${({ size }) => inputSizes[size!]}

  &:focus {
    outline: 0;
    border: 1px solid ${colors.slate500};
    box-shadow: 0 0 0 0 !important;
  }

  &:hover {
    border: 1px solid ${colors.slate400};
  }
`

export const PasswordComponent = styled(InputAntd.Password)<InputProps>`
  &:focus-within {
    outline: 0 !important;
    border: 1px solid ${colors.slate500};
    box-shadow: 0 0 0 0 !important;
  }

  border: 1px solid ${colors.slate300};
  border-radius: 0.25rem;
  font-size: 1rem;
  color: ${colors.slate600};

  ${({ size }) => inputSizes[size!]}

  &:focus {
    outline: 0 !important;
    border: 1px solid ${colors.slate500};
    box-shadow: 0 0 0 0 !important;
  }

  &:hover {
    border: 1px solid ${colors.slate400};
  }
`
