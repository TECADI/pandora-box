import { BadgeProps } from './'
import { styled } from '../../styles'
import { getVariant } from '../../utils/getVariants'

const sizes = {
  sm: {
    padding: '4px 6px',
  },
  md: {
    padding: '6px 8px',
  },
  lg: {
    padding: '8px 12px',
  },
}

export const BadgeContainer = styled.div<BadgeProps>`
  width: fit-content;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  font-stretch: normal;
  word-break: break-word;

  border-radius: ${({ rounded }) => (rounded ? '9999px' : '4px')};
  ${({ colorSchema }) => getVariant({ colorSchema })};
  ${({ size }) => sizes[size || 'md']};
`
