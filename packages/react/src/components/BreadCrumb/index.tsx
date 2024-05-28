import { Heading } from '../Heading'
import { Text } from '../Text'
import { BreadCrumbComponent } from './styles'

export interface BreadCrumbProps {
  icon: React.ReactNode
  page: string
  desc: string
}

export function BreadCrumb({ icon, page, desc }: BreadCrumbProps) {
  return (
    <BreadCrumbComponent>
      {icon}
      <Heading>{`${page} |`}</Heading> <Text>{desc}</Text>
    </BreadCrumbComponent>
  )
}
