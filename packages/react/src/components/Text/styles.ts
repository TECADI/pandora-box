import { TextProps } from './'
import { styled } from '../../styles'
import { colors } from '@pandora-box-tecadi/design-system'

const sizeList = {
  xxs: '0.625rem',
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.75rem',
  '4xl': '2rem',
  '5xl': '2.25rem',
  '6xl': '3rem',
  '7xl': '4rem',
}

export const TextComponent = styled.span<TextProps>`
  ${({ size, color }) => {
    return `
      font-size: ${sizeList[size || 'md']};
      color: ${color || colors.slate600};
    `
  }}

  font-family: 'Roboto', sans-serif;
`
