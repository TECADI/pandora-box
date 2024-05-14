import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Flex = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$white',
})

export interface FlexProps extends ComponentProps<typeof Flex> {}

Flex.displayName = 'Flex'
