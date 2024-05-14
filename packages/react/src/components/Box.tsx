import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$white',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
