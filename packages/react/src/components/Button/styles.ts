import { styled, keyframes } from '../../styles'
import { ImSpinner6 } from 'react-icons/im'

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const LoadingSpinner = styled(ImSpinner6, {
  animation: `${spin} 1s linear infinite`,
  width: '$4',
  height: '$4',
  color: '$slate700',
})

export const ButtonContainer = styled('button', {
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

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$slate700',
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
