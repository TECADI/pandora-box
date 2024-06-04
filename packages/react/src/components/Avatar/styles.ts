import { colors } from '@pandora-box-tecadi/design-system'
import { styled } from '../../styles'
import { AvatarProps } from '.'

const sizes = {
  sm: {
    width: '30px',
    height: '30px',
    fontSize: '14px',
  },
  md: {
    width: '50px',
    height: '50px',
    fontSize: '24px',
  },
  lg: {
    width: '70px',
    height: '70px',
    fontSize: '34px',
  },
}

export const AvatarComponent = styled.div<AvatarProps>`
  border-radius: ${({ rounded }) => (rounded ? '9999px' : '6px')};
  background: ${colors.gray200};

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${({ avatarUrl }) =>
    avatarUrl &&
    `
    background: url(${avatarUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}

  ${({ size }) => sizes[size!]}
`
