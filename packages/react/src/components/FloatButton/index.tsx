import { Tooltip } from 'antd'
import { Sizes, Variants } from '../../utils/types'
import { FloatButtonContainer } from './styles'

export interface FloatButtonProps {
  title?: string
  titleDirection?: 'top' | 'right' | 'bottom' | 'left'
  children: React.ReactNode
  colorSchema?: Variants
  size?: Sizes
  disabled?: boolean
  onClick?: () => void
  rounded?: boolean
  style?: React.CSSProperties
}

export function FloatButton({
  children,
  disabled,
  title,

  ...props
}: FloatButtonProps) {
  return (
    <Tooltip title={title}>
      <FloatButtonContainer {...props} disabled={disabled}>
        {children}
      </FloatButtonContainer>
    </Tooltip>
  )
}
