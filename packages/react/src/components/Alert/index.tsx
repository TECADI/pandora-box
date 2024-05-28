import { Flex } from '../Flex'
import { AlertContainer } from './styles'

// icons
import { FaInfoCircle } from 'react-icons/fa'
import { IoWarning, IoCloseCircle } from 'react-icons/io5'
import { FaCircleCheck, FaCircleExclamation } from 'react-icons/fa6'

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

export interface AlertProps {
  icon?: React.ReactNode
  hasIcon?: boolean
  title?: string
  description?: string
  border?: 'solid' | 'dashed' | 'dotted' | 'none'
  variant?: Variant
}

export function Alert({
  hasIcon,
  title,
  description,
  variant = 'primary',
  border,
}: AlertProps) {
  const icon = (variant: Variant) => {
    if (variant.includes('primary')) {
      return <FaInfoCircle size={30} />
    } else if (variant.includes('success')) {
      return <FaCircleCheck size={30} />
    } else if (variant.includes('danger')) {
      return <IoCloseCircle size={34} />
    } else if (variant.includes('warning')) {
      return <IoWarning size={34} />
    } else if (variant.includes('info')) {
      return <FaCircleExclamation size={30} />
    }
  }

  return (
    <AlertContainer variant={variant} border={border}>
      {hasIcon && icon(variant)}
      <Flex direction="column">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </Flex>
    </AlertContainer>
  )
}

Alert.displayName = 'Alert'
