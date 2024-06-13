import { HeadingComponent } from './styles'

export interface HeadingProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  color?: string
  size?:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
  style?: React.CSSProperties
}

export function Heading({ size, color, as = 'h2', children }: HeadingProps) {
  return (
    <HeadingComponent as={as} size={size} color={color}>
      {children}
    </HeadingComponent>
  )
}

Heading.displayName = 'Heading'
