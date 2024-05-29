import { InputGroupComponent, Label, InputTitle, Error } from './styles'
import { FaCircleInfo } from 'react-icons/fa6'
import { Tooltip } from 'antd'
export interface InputGroupProps {
  name: string
  label?: string
  required?: boolean
  info?: string
  error?: string
  children: React.ReactNode
}

export function InputGroup({
  label,
  required,
  info,
  error,
  children,
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

        {children}
      </InputGroupComponent>

      <Error>{error}</Error>
    </>
  )
}

InputGroup.displayName = 'InputGroup'
