import { InputComponent } from './styles'

export interface InputProps {
  value?: string
  onChange?: (value: Event) => void

  size?: 'sm' | 'md' | 'lg'
  direction?: 'row' | 'column'
}

export function Input({ ...props }: InputProps) {
  return <InputComponent {...props} />
}

Input.displayName = 'Input'
