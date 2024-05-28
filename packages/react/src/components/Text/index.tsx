import { TextComponent } from './styles'

export interface TextProps {
  children: React.ReactNode
  as?: 'p' | 'span'
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
}

export function Text({ size, color, as = 'span', children }: TextProps) {
  return (
    <TextComponent as={as} size={size} color={color}>
      {children}
    </TextComponent>
  )
}

Text.displayName = 'Text'
