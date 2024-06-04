import { CardContainer } from './styles'

export interface CardProps {
  children: React.ReactNode
  direction?: 'row' | 'column'
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap?: string
  fullSize?: boolean
  style?: React.CSSProperties
}

export function Card({ children, ...props }: CardProps) {
  return <CardContainer {...props}>{children}</CardContainer>
}
