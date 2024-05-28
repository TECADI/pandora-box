import { BadgeContainer } from './styles'

type Variant =
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'success-light'
  | 'danger-light'
  | 'warning-light'
  | 'info-light'

export interface BadgeProps {
  title?: string
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
}

export function Badge({ title, ...props }: BadgeProps) {
  return <BadgeContainer {...props}>{title}</BadgeContainer>
}

Badge.displayName = 'Badge'
