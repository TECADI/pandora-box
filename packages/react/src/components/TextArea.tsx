import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$slate100',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $slate200',
  display: 'flex',
  alignItems: 'baseline',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 'regular',
  resize: 'vertical',
  color: '$slate900',

  minHeight: 80,

  '&:focus': {
    borderColor: '$blue500',
    outline: 'none',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$slate400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
