import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$slate100',
  borderRadius: '$xs',
  lineHeight: 0,

  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $slate400',

  '&:focus': {
    border: '1px solid $slate400',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$slate600',
  },
})

const slideIn = keyframes({
  from: { opacity: 0, transform: 'translateY(-100%)' },
  to: { opacity: 1, transform: 'translateYX(0)' },
})

const slideOut = keyframes({
  from: { opacity: 1, transform: 'translateY(0)' },
  to: { opacity: 0, transform: 'translateY(-100%)' },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$slate600',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    color: '$slate100',
    animation: `${slideIn} 0.2s ease-out`,
  },

  '&[data-state="unchecked"]': {
    color: '$slate600',
    animation: `${slideOut} 0.2s ease-out`,
  },
})
