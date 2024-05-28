/*
import { ComponentProps, ElementType } from 'react'
import { ButtonContainer, LoadingSpinner } from './styles'

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  as?: ElementType
  loading?: boolean
}

export function Button({ loading, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props} disabled={loading || props.disabled}>
      {loading ? (
        <>
          <LoadingSpinner />
          Carregando
        </>
      ) : (
        props.children
      )}
    </ButtonContainer>
  )
}

Button.displayName = 'Button'

*/

import { ButtonContainer } from './styles'

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'success' | 'danger' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ children, variant }: ButtonProps) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>
}
