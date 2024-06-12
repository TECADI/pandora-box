import { Sizes, StatusVariants, Variants } from '../../utils/types'
import { BadgeContainer } from './styles'

export interface BadgeProps {
  title?: string
  colorSchema?: Variants | StatusVariants
  size?: Sizes
  rounded?: boolean
}

export function Badge({ title, ...props }: BadgeProps) {
  return <BadgeContainer {...props}>{title}</BadgeContainer>
}

Badge.displayName = 'Badge'
