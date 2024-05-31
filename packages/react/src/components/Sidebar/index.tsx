import { TbLogout } from 'react-icons/tb'

import {
  SidebarComponent,
  Logout,
  MenuNavigation,
  ListNavigation,
  ListItem,
  Logo,
} from './styles'

type NavigationItem = {
  label: string
  key: string
  icon: JSX.Element
}

export interface SidebarProps {
  logoUrl: string
  asActive?: boolean
  navigationList: NavigationItem[]
  handlePressItemNavigation: (item: { key: string; keyPath: string[] }) => void
  handleLogout: () => void
}

export const Sidebar = ({
  navigationList,
  handlePressItemNavigation,
  handleLogout,
  asActive,
  logoUrl,
}: SidebarProps) => {
  return (
    <SidebarComponent>
      <MenuNavigation>
        {logoUrl && <Logo url={logoUrl} />}
        <ListNavigation>
          {navigationList.map(({ label, key, icon }) => (
            <ListItem
              key={key}
              activeItem={asActive}
              onClick={() => handlePressItemNavigation({ key, keyPath: [key] })}
            >
              {icon}
              {label}
            </ListItem>
          ))}
        </ListNavigation>
      </MenuNavigation>

      <Logout onClick={handleLogout}>
        Sair
        <TbLogout size={20} />
      </Logout>
    </SidebarComponent>
  )
}