import {
  InputGroupComponent,
  Input,
  Label,
  InputTitle,
  Error,
  TextArea,
  Select,
} from './styles'
import { FaCircleInfo } from 'react-icons/fa6'
import { Tooltip } from 'antd'
export interface InputGroupProps {
  name: string
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
  // variant?: 'default' | 'ghost'
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'date'
  as?: 'input' | 'textarea' | 'checkbox' | 'radio' | 'select' | 'multi-select'
}

const InputComponent = (props: InputGroupProps) => {
  switch (props.as) {
    case 'textarea':
      return <TextArea {...props} />
    case 'select':
      return (
        <Select
          name={props.name}
          defaultValue={props.value}
          onChange={props.onChange}
          options={props.options}
        />
      )
    default:
      return <Input {...props} />
  }
}

export function InputGroup({
  label,
  required,
  info,
  name,
  onChange,
  placeholder,
  value,
  error,
  as,
  options,
  type = 'text',
  size = 'md',
}: InputGroupProps) {
  return (
    <>
      <InputGroupComponent>
        <InputTitle>
          <Label>
            {label}
            {required && <span className="required">*</span>}
          </Label>

          {info && (
            <Tooltip title={info}>
              <FaCircleInfo color="#64748b" />
            </Tooltip>
          )}
        </InputTitle>

        {
          <InputComponent
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            error={error}
            type={type}
            size={size}
            as={as}
            options={options}
          />
        }
      </InputGroupComponent>

      <Error>{error}</Error>
    </>
  )
}

InputGroup.displayName = 'InputGroup'
