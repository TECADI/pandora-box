import { theme } from '../styles'

interface VariantProps {
  variant?:
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'primary-light'
    | 'success-light'
    | 'danger-light'
    | 'warning-light'
    | 'info-light'
}

export const getVariant = ({ variant = 'primary' }: VariantProps) => {
  return theme.variants[variant]
}
