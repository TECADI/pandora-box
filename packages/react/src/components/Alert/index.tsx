import { ComponentProps, ElementType } from 'react'
import { AlertContainer } from './styles'
import { Heading } from '../Heading'
import { Text } from '../Text'

export interface AlertProps extends ComponentProps<typeof AlertContainer> {
  as?: ElementType
  children?: React.ReactNode
  title: string
  description: string
}

export function Alert({ ...props }: AlertProps) {
  return (
    <AlertContainer {...props}>
      <Heading>{props.title}</Heading>
      <Text as="span">{props.description}</Text>
    </AlertContainer>
  )
}

Alert.displayName = 'Alert'
