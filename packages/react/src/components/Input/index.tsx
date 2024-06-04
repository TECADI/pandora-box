import { Sizes } from '../../utils/types'
import { InputComponent } from './styles'

export interface InputProps {
  value?: string
  onChange?: (value: Event) => void
  placeholder?: string

  size?: Sizes
  direction?: 'row' | 'column'
}

export function Input({ ...props }: InputProps) {
  return <InputComponent {...props} />
}

Input.displayName = 'Input'
