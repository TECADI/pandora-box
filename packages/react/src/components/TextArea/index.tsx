import { TextareaComponent } from './styles'

export interface TextAreaProps {
  placeholder?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  rows?: number
  disabled?: boolean
  maxLength?: number
}

export function TextArea({
  placeholder,
  value,
  onChange,
  rows = 3,
  maxLength = 600,
  disabled,
}: TextAreaProps) {
  return (
    <TextareaComponent
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      rows={rows}
      maxLength={maxLength}
      disabled={disabled}
    />
  )
}
