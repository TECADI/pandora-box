import { Sizes, Variants } from '../../utils/types'
import { BadgeContainer } from './styles'

export interface BadgeProps {
  title?: string
  variant?: Variants
  size?: Sizes
  rounded?: boolean
}

export function Badge({ title, ...props }: BadgeProps) {
  return <BadgeContainer {...props}>{title}</BadgeContainer>
}

Badge.displayName = 'Badge'
