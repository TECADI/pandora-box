import { FloatButtonProps } from '.'
import { colors } from '@pandora-box-tecadi/design-system'
import { styled } from '../../styles'
import { getVariant } from '../../utils/getVariants'

const sizes: {
  [key: string]: { fontSize: string; padding: string }
} = {
  sm: {
    fontSize: '24px',
    padding: '6px',
  },
  md: {
    fontSize: '30px',
    padding: '8px',
  },
  lg: {
    fontSize: '36px',
    padding: '10px',
  },
}

export const FloatButtonContainer = styled.button<FloatButtonProps>`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  border-radius: 4px;

  cursor: pointer;
  transition: background-color 0.2s;

  border-radius: ${({ rounded }) => (rounded ? '50%' : '4px')};

  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.slate100};
    color: ${colors.slate400};
  }

  &:not(:disabled):hover {
    filter: brightness(
      ${({ colorSchema }) =>
        !colorSchema?.includes('light') ? '1.09' : '0.97'}
    );
  }

  ${({ size }) => sizes[size || 'md']}
  ${({ colorSchema }) => getVariant({ colorSchema })}
`
