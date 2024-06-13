import { AlertProps } from './'
import { styled } from '../../styles'
import { getVariant } from '../../utils/getVariants'

export const AlertContainer = styled.div<AlertProps>`
  display: flex;
  gap: 16px;

  align-items: start;

  border-radius: 4px;
  padding: 24px;

  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  font-stretch: normal;
  word-break: break-word;

  h3 {
    margin: 0;
    font-size: 1.45rem;
  }

  ${({ colorSchema, border }) => {
    const variantStyles = getVariant({ colorSchema })
    return `
      background-color: ${variantStyles.backgroundColor};
      color: ${variantStyles.color};
      
      ${border !== 'none' ? `border: 1px ${border} ${variantStyles.color};` : ''}
    `
  }}
`
