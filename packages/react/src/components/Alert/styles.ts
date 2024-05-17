import { styled } from '../../styles'

export const AlertContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  borderRadius: '$sm',
  padding: '$6',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',

  fontStretch: 'normal',
  wordBreak: 'break-word',

  variants: {
    variant: {
      success: {
        backgroundColor: '$green500',

        h2: {
          color: '$green50',
        },
        span: {
          color: '$green100',
        },
      },
      danger: {
        backgroundColor: '$red500',

        h2: {
          color: '$red50',
        },
        span: {
          color: '$red100',
        },
      },
      warning: {
        backgroundColor: '$amber500',

        h2: {
          color: '$amber50',
        },
        span: {
          color: '$amber100',
        },
      },
      info: {
        backgroundColor: '$indigo500',

        h2: {
          color: '$indigo50',
        },
        span: {
          color: '$indigo100',
        },
      },
      primary: {
        backgroundColor: '$blue500',

        h2: {
          color: '$blue50',
        },
        span: {
          color: '$blue100',
        },
      },
      'success-light': {
        backgroundColor: '$green200',

        h2: {
          color: '$green800',
        },
        span: {
          color: '$green600',
        },
      },
      'danger-light': {
        backgroundColor: '$red200',
        h2: {
          color: '$red800',
        },
        span: {
          color: '$red600',
        },
      },
      'warning-light': {
        backgroundColor: '$amber200',
        h2: {
          color: '$amber800',
        },
        span: {
          color: '$amber600',
        },
      },
      'info-light': {
        backgroundColor: '$indigo200',
        h2: {
          color: '$indigo800',
        },
        span: {
          color: '$indigo600',
        },
      },
      'primary-light': {
        backgroundColor: '$blue200',
        h2: {
          color: '$blue800',
        },
        span: {
          color: '$blue700',
        },
      },
    },
  },
})
