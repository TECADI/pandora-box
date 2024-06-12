import { colors } from '@pandora-box-tecadi/design-system'
import { styled } from '../../styles'
import { Flex } from '../Flex'

export const BreadCrumbComponent = styled(Flex)<{ size?: string }>`
  align-items: flex-end;
  gap: 0.425rem;
  color: ${colors.slate400};

  h2 {
    margin: 0;
  }
`
