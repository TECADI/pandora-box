import { Sizes } from '../../utils/types'
import { SelectComponent } from './styles'

export interface SelectProps {
  options?: {
    value: string
    label: string
  }[]

  value?: string
  onChange?: (value: Event) => void

  size?: Sizes
  direction?: 'row' | 'column'
}

export function Select({
  onChange,
  value,

  options,
}: SelectProps) {
  return (
    <SelectComponent
      defaultValue={value}
      onChange={onChange}
      options={options}
    />
  )
}

Select.displayName = 'Select'
