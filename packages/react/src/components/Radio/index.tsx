/* eslint-disable @typescript-eslint/no-explicit-any */
import { RadioButton, RadioGroupComponent } from './styles'

export interface RadioGroupProps {
  value: string | number | boolean
  onChange: (e: any) => void
  options: { label: string; value: string | number | boolean }[]
}

export function Radio({ value, options, onChange }: RadioGroupProps) {
  return (
    <RadioGroupComponent
      defaultValue={value}
      size="large"
      buttonStyle="solid"
      onChange={onChange}
    >
      {options.map((item, index) => (
        <RadioButton key={index} value={item.value}>
          {item.label}
        </RadioButton>
      ))}
    </RadioGroupComponent>
  )
}
