import { ComponentProps } from 'react'
import { HeaderContainer, Row } from './styles'
import { Text } from '../Text'
import { Avatar } from '../Avatar'
import { FaFileLines } from 'react-icons/fa6'

export interface HeaderProps extends ComponentProps<typeof HeaderContainer> {}

export function Header(props: HeaderProps) {
  return (
    <HeaderContainer {...props}>
      <Row>
        <FaFileLines size={26} />
        <Row>
          <Text size={'lg'} fontWeights={'medium'}>
            Header
          </Text>
          |<Text size={'md'}>Header</Text>
        </Row>
      </Row>

      <Row>
        <Avatar src="https://github.com/TECADI.png" />
      </Row>
    </HeaderContainer>
  )
}

Header.displayName = 'Header'
