import { HeaderComponent } from './styles'

export interface HeaderProps {
  children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  return <HeaderComponent>{children}</HeaderComponent>
}
