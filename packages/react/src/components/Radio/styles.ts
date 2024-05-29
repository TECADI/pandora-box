import { styled } from '../../styles'
import { RadioProps } from '.'
import { Radio as RadioAntd } from 'antd'

export const RadioComponent = styled(RadioAntd.Group)<RadioProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 0.5rem;
`

export const RadioItem = styled(RadioAntd)<RadioProps>``
