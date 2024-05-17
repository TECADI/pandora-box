import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',

  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
    },
  },
})

export interface ContainerProps extends ComponentProps<typeof Container> {}

Container.displayName = 'Container'
