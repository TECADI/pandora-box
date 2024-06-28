import styled from 'styled-components'
import { Input } from 'antd'
import { colors } from '@pandora-box-tecadi/design-system'

const TextareaAntd = Input.TextArea

export const TextareaComponent = styled(TextareaAntd)`
  max-height: 200px;

  padding: 0.75rem !important;
  border: 1px solid ${colors.slate200} !important;
  background-color: ${colors.slate200} !important;

  border-radius: 0.25rem !important;
  color: ${colors.slate600} !important;

  &:hover {
    border: 1px solid ${colors.slate300} !important;
  }

  &:focus-within {
    outline: 0 !important;
    border: 1px solid ${colors.slate400} !important;
    box-shadow: 0 0 0 0 !important;
  }
`
