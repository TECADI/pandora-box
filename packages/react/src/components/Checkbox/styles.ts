import { styled } from '../../styles'
import { CheckboxProps } from '.'
import { Checkbox as CheckboxAntd } from 'antd'

export const CheckboxComponent = styled(CheckboxAntd.Group)<CheckboxProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 0.5rem;
`

export const CheckboxItem = styled(CheckboxAntd)<CheckboxProps>``
