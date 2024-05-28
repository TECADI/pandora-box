import { BadgeProps } from './'
import { styled } from '../../styles'
import { getVariant } from '../../utils/getVariants'

export const BadgeContainer = styled.div<BadgeProps>`
  padding: 4px 8px;

  width: fit-content;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  font-stretch: normal;
  word-break: break-word;

  border-radius: ${({ rounded }) => (rounded ? '9999px' : '4px')};
  ${({ variant }) => getVariant({ variant })};
`
