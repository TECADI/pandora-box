import { colors } from '@pandora-box-tecadi/design-system'
import { styled } from '../../styles'

export const HeaderComponent = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 20px;

  background-color: #f8f8f8;
  border-bottom: 1px solid ${colors.slate300};
`
