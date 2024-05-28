import { ButtonContainer, LoadingSpinner } from './styles'

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export function Button({ children, loading, disabled, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props} disabled={loading || disabled}>
      {loading ? (
        <>
          <LoadingSpinner size={props.size} />
          Carregando
        </>
      ) : (
        children
      )}
    </ButtonContainer>
  )
}
