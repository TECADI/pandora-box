import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$white',
  border: '1px solid $gray300',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
