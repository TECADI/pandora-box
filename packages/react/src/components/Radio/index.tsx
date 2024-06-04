import { Sizes } from '../../utils/types'
import { RadioComponent, RadioItem } from './styles'

export interface RadioProps {
  options?: {
    value: string
    label: string
  }[]

  value?: string
  onChange?: (value: Event) => void

  size?: Sizes
  direction?: 'row' | 'column'
}

export function Radio({
  onChange,
  value,
  options,
  size = 'md',
  direction = 'column',
}: RadioProps) {
  return (
    <RadioComponent
      onChange={onChange}
      style={{
        display: 'flex',
        alignItems: 'start',
        flexDirection: direction,
      }}
    >
      {options?.map((option) => (
        <RadioItem
          key={option.value}
          value={option.value}
          checked={value === option.value}
          size={size}
        >
          {option.label}
        </RadioItem>
      ))}
    </RadioComponent>
  )
}

Radio.displayName = 'Radio'
