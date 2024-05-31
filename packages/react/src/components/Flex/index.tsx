import { FlexComponent } from './styles'

export interface FlexProps {
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
  style?: React.CSSProperties
}

export function Flex({ children, ...props }: FlexProps) {
  return <FlexComponent {...props}>{children}</FlexComponent>
}

Flex.displayName = 'Flex'
