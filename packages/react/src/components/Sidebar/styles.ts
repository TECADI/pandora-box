import { colors } from '@pandora-box-tecadi/design-system'
import styled from 'styled-components'

export const Logo = styled.div<{ url: string }>`
  background-image: url(${({ url }) => url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 52px;
  width: 100%;
`

export const SidebarComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  width: 220px;
  height: 100vh;
  background-color: ${colors.gray900};
  color: ${colors.gray400};
  padding: 28px 20px 10px;

  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`

export const MenuNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 52px;
`

export const ListNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.16rem;
`

interface ListItemProps {
  activeItem?: boolean
}

export const ListItem = styled.div<ListItemProps>`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  text-align: left;
  gap: 10px;
  cursor: pointer;
  transition: color 0.2s;
  padding: 12px 8px;

  > div {
    width: 32px;
    height: 28px;
  }

  color: ${({ activeItem }) => (activeItem ? colors.blue50 : colors.gray500)};
  transition: all 0.2s;

  &:hover {
    color: ${colors.gray100};
    background-color: #ffffff0f;
    border-radius: 4px;
  }
`

export const Logout = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 10px;

  color: ${colors.gray400};
  transition: all 0.2s;

  &:hover {
    color: ${colors.gray100};
    background-color: #ffffff0f;
    border-radius: 4px;
  }
`
