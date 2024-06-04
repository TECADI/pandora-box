import { Sizes } from '../../utils/types'
import { InputComponent, PasswordComponent } from './styles'

type InputTypes = 'text' | 'password' | 'email' | 'number' | 'tel'

export interface InputProps {
  value?: string
  onChange?: (value: Event) => void
  placeholder?: string

  size?: Sizes
  direction?: 'row' | 'column'
  type?: InputTypes
}

export function Input({ ...props }: InputProps) {
  const handleInput = (type: InputTypes | undefined) => {
    switch (type) {
      case 'password':
        return <PasswordComponent {...props} />
      case 'email':
        return <InputComponent {...props} />
      case 'number':
        return <InputComponent {...props} />
      case 'tel':
        return <InputComponent {...props} />
      default:
        return <InputComponent {...props} />
    }
  }

  return handleInput(props.type)
}

Input.displayName = 'Input'
