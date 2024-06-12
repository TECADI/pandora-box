import { Sizes, Variants } from '../../utils/types'
import { ButtonContainer, LoadingSpinner } from './styles'

export interface ButtonProps {
  children: React.ReactNode
  colorSchema?: Variants
  size?: Sizes
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  style?: React.CSSProperties
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
