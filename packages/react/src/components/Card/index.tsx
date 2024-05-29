import { CardContainer } from './styles'

export interface CardProps {
  children: React.ReactNode
}

export function Card({ children, ...props }: CardProps) {
  return <CardContainer {...props}>{children}</CardContainer>
}
