/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectComponent } from './styles'

export interface SelectProps {
  value: any
  options: { label: any; value: any }[]
  onChange: (value: any) => void

  mode?: 'multiple' | 'tags' | undefined
  showSearch?: boolean
  style?: React.CSSProperties
  placeholder?: string
  dropdown?: React.ReactNode
}

export function Select({
  showSearch,
  style,
  placeholder,
  options,
  value,
  onChange,
  mode,
  dropdown,
}: SelectProps) {
  return dropdown ? (
    <SelectComponent
      mode={mode}
      showSearch={showSearch}
      style={style}
      placeholder={placeholder}
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      options={options}
      value={value}
      onChange={onChange}
      dropdownRender={(menu) => (
        <>
          {menu}
          {dropdown}
        </>
      )}
    />
  ) : (
    <SelectComponent
      mode={mode}
      showSearch={showSearch}
      style={style}
      placeholder={placeholder}
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      options={options}
      value={value}
      onChange={onChange}
    />
  )
}
