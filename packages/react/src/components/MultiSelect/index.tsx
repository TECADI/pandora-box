import { Sizes } from '../../utils/types'
import { MultiSelectComponent } from './styles'

export interface MultiSelectProps {
  value?: string
  options?: {
    value: string
    label: string
  }[]

  onChange?: (value: Event) => void

  size?: Sizes
  mode?: 'multiple' | 'tags' | undefined
}

export function MultiSelect({
  onChange,
  value,
  options,
  mode = undefined,
  size = 'md',
}: MultiSelectProps) {
  return (
    <MultiSelectComponent
      mode={mode}
      defaultValue={value}
      onChange={onChange}
      options={options}
      size={size}
    />
  )
}

MultiSelect.displayName = 'MultiSelect'
