import { BreadCrumb } from '../BreadCrumb'
import { HeaderMenu } from '../HeaderMenu'
import { HeaderComponent } from './styles'

export interface HeaderProps {
  breadcrumb: {
    icon: React.ReactNode
    page: string
    desc: string
  }
  userMenu: React.ReactNode
}

export function Header({ breadcrumb, userMenu }: HeaderProps) {
  const { icon, page, desc } = breadcrumb
  return (
    <HeaderComponent>
      <BreadCrumb icon={icon} page={page} desc={desc} />
      <HeaderMenu>{userMenu}</HeaderMenu>
    </HeaderComponent>
  )
}
