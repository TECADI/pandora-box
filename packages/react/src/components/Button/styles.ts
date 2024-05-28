import { colors } from '@pandora-box-tecadi/design-system'
import { ButtonProps } from '.'
import { keyframes, styled } from '../../styles'
import { getVariant } from '../../utils/getVariants'
import { FaSpinner } from 'react-icons/fa'

const sizes: {
  [key: string]: { fontSize: string; padding: string }
} = {
  sm: {
    fontSize: '14px',
    padding: '6px 10px',
  },
  md: {
    fontSize: '16px',
    padding: '8px 14px',
  },
  lg: {
    fontSize: '18px',
    padding: '10px 18px',
  },
}
const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const LoadingSpinner = styled(FaSpinner)`
  animation: ${spin} 1.32s linear infinite;
  ${({ size }) => (size ? `width: ${sizes[size].fontSize}` : 'width: 20px')};
`

export const ButtonContainer = styled.button<ButtonProps>`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  box-sizing: border-box;
  cursor: pointer;
  border-radius: 4px;

  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  text-align: center;

  transition: background-color 0.2s;

  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.slate100};
    color: ${colors.slate400};
  }

  &:not(:disabled):hover {
    filter: brightness(
      ${({ variant }) => (!variant?.includes('light') ? '1.09' : '0.97')}
    );
  }

  ${({ size }) => sizes[size || 'md']}
  ${({ variant }) => getVariant({ variant })}
`
