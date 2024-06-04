import { theme } from '../styles'
import { Variants } from './types'

interface VariantProps {
  variant?: Variants
}

export const getVariant = ({ variant = 'primary' }: VariantProps) => {
  return theme.variants[variant]
}
