import { FlexProps } from './'
import { styled } from '../../styles'

export const FlexComponent = styled.div<FlexProps>`
  ${({
    direction = 'row',
    justify = 'flex-start',
    align = 'flex-start',
    wrap = 'nowrap',
    gap = '0',
  }) => `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
  gap: ${gap};

`}
`
