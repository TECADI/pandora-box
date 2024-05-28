/*
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

*/

import { ButtonProps } from '.'
import { styled } from '../../styles'
import { getVariant } from '../../utils/getVariants'

export const ButtonContainer = styled.button<ButtonProps>`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;

  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  min-width: 120px;
  box-sizing: border-box;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: 0 0 0 2px #333;
  }

  &:not(:disabled):hover {
    background-color: #444;
  }

  ${({ variant }) => {
    const variantStyles = getVariant({ variant })
    return `
      background-color: ${variantStyles.backgroundColor};
      color: ${variantStyles.color};
    `
  }}
`
