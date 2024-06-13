import { Heading } from '../Heading'
import { Text } from '../Text'
import { BreadCrumbComponent } from './styles'

export interface BreadCrumbProps {
  icon: React.ReactNode
  page: string
  desc: string
  size?: 'sm' | 'md' | 'lg'
  style?: React.CSSProperties
}

export function BreadCrumb({ icon, page, desc, ...props }: BreadCrumbProps) {
  return (
    <BreadCrumbComponent {...props}>
      {icon}
      <Heading size="xl">{`${page} |`}</Heading> <Text size="lg">{desc}</Text>
    </BreadCrumbComponent>
  )
}
