import { styled, theme } from '../../styles'
import { InputGroupProps } from '.'
import { Select as SelectAntd } from 'antd'
export const InputGroupComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  font-family: 'Roboto', sans-serif;

  .required {
    color: ${theme.colors.red400};
  }
`

export const InputTitle = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Label = styled.label`
  display: flex;
  gap: 0.25rem;

  font-size: 0.875rem;
  color: #333;
`

export const Input = styled.input<InputGroupProps>`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
`

export const TextArea = styled.textarea<InputGroupProps>`
  all: unset;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
`

export const Select = styled(SelectAntd)<InputGroupProps>``

export const Error = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.red400};
`
