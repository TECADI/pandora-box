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
  border-radius: ${(props) => (props.rounded ? '9999px' : '6px')};
  background: ${colors.gray200};

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${(props) =>
    props.avatarUrl &&
    `
    background: url(${props.avatarUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}

  width: ${(props) => sizes[props.size!].width};
  height: ${(props) => sizes[props.size!].height};
  font-size: ${(props) => sizes[props.size!].fontSize};
`
