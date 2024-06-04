import { Sizes } from '../../utils/types'
import { AvatarComponent } from './styles'
import { UserOutlined } from '@ant-design/icons'

export interface AvatarProps {
  rounded?: boolean
  avatarUrl?: string
  size?: Sizes
}

export function Avatar({ avatarUrl, rounded, size = 'md' }: AvatarProps) {
  return (
    <AvatarComponent rounded={rounded} avatarUrl={avatarUrl} size={size}>
      {!avatarUrl && <UserOutlined />}
    </AvatarComponent>
  )
}
