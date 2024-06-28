/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckboxGroupComponent } from './styles'

export interface CheckboxGroupProps {
  value: string[] | number[] | boolean[]
  onChange: (e: any) => void
  options: { label: string; value: string | number | boolean }[]
}

export function Checkbox({ value, options, onChange }: CheckboxGroupProps) {
  return (
    <CheckboxGroupComponent
      defaultValue={value}
      onChange={onChange}
      options={options}
    ></CheckboxGroupComponent>
  )
}
