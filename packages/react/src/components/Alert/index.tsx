import { Flex } from '../Flex'
import { AlertContainer } from './styles'

// icons
import { FaInfoCircle } from 'react-icons/fa'
import { IoWarning, IoCloseCircle } from 'react-icons/io5'
import { FaCircleCheck, FaCircleExclamation } from 'react-icons/fa6'
import { Borders, StatusVariants } from '../../utils/types'

export interface AlertProps {
  icon?: React.ReactNode
  hasIcon?: boolean
  title?: string
  description?: string
  border?: Borders
  colorSchema?: StatusVariants
}

export function Alert({
  hasIcon,
  title,
  description,
  colorSchema = 'primary',
  border,
}: AlertProps) {
  const icon = (colorSchema: StatusVariants) => {
    if (colorSchema.includes('primary')) {
      return <FaInfoCircle size={30} />
    } else if (colorSchema.includes('success')) {
      return <FaCircleCheck size={30} />
    } else if (colorSchema.includes('danger')) {
      return <IoCloseCircle size={34} />
    } else if (colorSchema.includes('warning')) {
      return <IoWarning size={34} />
    } else if (colorSchema.includes('info')) {
      return <FaCircleExclamation size={30} />
    }
  }

  return (
    <AlertContainer colorSchema={colorSchema} border={border}>
      {hasIcon && icon(colorSchema)}
      <Flex direction="column">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </Flex>
    </AlertContainer>
  )
}

Alert.displayName = 'Alert'
