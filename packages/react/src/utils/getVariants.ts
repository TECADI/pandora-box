import { colors } from '@pandora-box-tecadi/design-system'
import { theme } from '../styles'
import { Variants } from './types'
import { getContrast } from 'polished'

interface VariantProps {
  colorSchema?: Variants
}

export const getVariant = ({ colorSchema = 'primary' }: VariantProps) => {
  return theme.variants[colorSchema]
}

export const getContrastColor = (colorSchema: VariantProps) => {
  const bgColor = getVariant(colorSchema).backgroundColor
  const textColor = colors.slate100

  const contrastValue = getContrast(bgColor, textColor)

  return contrastValue < 2.5 ? colors.slate700 : colors.slate50
}
