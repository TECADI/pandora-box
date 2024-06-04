import { colors } from '@pandora-box-tecadi/design-system'
import { styled } from '../../styles'
import { CardProps } from '.'

export const CardContainer = styled.div<CardProps>`
  padding: 26px;
  border-radius: 8px;
  background-color: ${colors.slate50};

  ${({
    direction = 'row',
    justify = 'flex-start',
    align = 'flex-start',
    wrap = 'nowrap',
    gap = '0',
    fullSize = false,
  }) => `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
  gap: ${gap};

  ${fullSize ? 'width: 100%; height: 100%;' : ''}
`}
`
