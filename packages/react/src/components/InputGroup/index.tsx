import { InputGroupComponent, Label, Error } from './styles'
import { FaCircleInfo } from 'react-icons/fa6'
import { Tooltip } from 'antd'
import { Flex } from '../Flex'
export interface InputGroupProps {
  name: string
  label?: string
  required?: boolean
  info?: string
  error?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

export function InputGroup({
  label,
  required,
  info,
  error,
  children,
  ...props
}: InputGroupProps) {
  return (
    <InputGroupComponent {...props}>
      <Flex gap={'0.5rem'}>
        <Label>
          {label}
          {required && <span className="required">*</span>}
        </Label>

        {info && (
          <Tooltip title={info}>
            <FaCircleInfo color="#64748b" />
          </Tooltip>
        )}
      </Flex>

      {children}

      <Error show={!!error}>{error}</Error>
    </InputGroupComponent>
  )
}

InputGroup.displayName = 'InputGroup'
