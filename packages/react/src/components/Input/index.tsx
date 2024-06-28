import { Sizes, Variants } from '../../utils/types'
import { InputComponent, PasswordComponent } from './styles'

type InputTypes = 'text' | 'password'

export interface InputProps {
  ref?: React.Ref<HTMLInputElement>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any
  onChange?: (value: Event) => void
  placeholder?: string
  colorSchema?: Variants
  style?: React.CSSProperties

  size?: Sizes
  direction?: 'row' | 'column'
  type?: InputTypes
  maxLength?: number
  disabled?: boolean
}

export function Input({ ...props }: InputProps) {
  const handleInput = (type: InputTypes | undefined) => {
    switch (type) {
      case 'password':
        return <PasswordComponent {...props} />
      default:
        return <InputComponent {...props} />
    }
  }

  return handleInput(props.type)
}

Input.displayName = 'Input'
