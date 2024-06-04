import { styled, theme } from '../../styles'
import { colors } from '@pandora-box-tecadi/design-system'

export const InputGroupComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  font-family: 'Roboto', sans-serif;

  .required {
    color: ${theme.colors.red400};
  }
`

export const InputTitle = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Label = styled.label`
  display: flex;
  gap: 0.25rem;

  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.slate700};
`

export const Error = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.red400};
`
