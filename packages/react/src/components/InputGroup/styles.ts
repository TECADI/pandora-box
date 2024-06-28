import { styled, keyframes } from '../../styles'
import { colors } from '@pandora-box-tecadi/design-system'

export const InputGroupComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  font-family: 'Roboto', sans-serif;

  .required {
    color: ${colors.red400};
  }
`

export const Label = styled.label`
  display: flex;
  gap: 0.25rem;

  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.slate700};
`

// create fade in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
  
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

// create animation for error message to fade in
export const Error = styled.span<{
  show: boolean
}>`
  font-size: 0.75rem;
  color: ${colors.red400};
  animation: ${({ show }) => (show ? fadeIn : fadeOut)} 0.3s ease-in-out;
  animation-fill-mode: forwards;
  height: 1rem;
`
