import { CheckboxComponent, CheckboxItem } from './styles'

export interface CheckboxProps {
  label?: string
  required?: boolean
  info?: string

  error?: string
  placeholder?: string
  options?: {
    value: string
    label: string
  }[]

  value?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (value: any) => void

  size?: 'sm' | 'md' | 'lg'
  direction?: 'row' | 'column'
  // variant?: 'default' | 'ghost'
}

export function Checkbox({
  onChange,
  value,
  options,
  size = 'md',
  direction = 'column',
}: CheckboxProps) {
  return (
    <CheckboxComponent
      onChange={onChange}
      style={{
        display: 'flex',
        alignItems: 'start',
        flexDirection: direction,
      }}
    >
      {options?.map((option) => (
        <CheckboxItem
          key={option.value}
          value={option.value}
          checked={value === option.value}
          size={size}
        >
          {option.label}
        </CheckboxItem>
      ))}
    </CheckboxComponent>
  )
}

Checkbox.displayName = 'Checkbox'
