import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$slate500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$slate600',
        },

        '&:disabled': {
          backgroundColor: '$slate300',
          color: '$slate600',
        },
      },
      secondary: {
        backgroundColor: '$teal500',
        color: '$white',
        '&:hover': {
          backgroundColor: '$teal600',
        },
      },
      tertiary: {
        backgroundColor: '$white',
        border: '2px solid $slate500',
        '&:hover': {
          backgroundColor: '$slate100',
        },
      },
    },

    size: {
      sm: {
        padding: '0 $3',
        height: 34,
      },
      md: {
        padding: '0 $4',
        height: 46,
      },
      lg: {
        padding: '0 $5',
        height: 54,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
