import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  padding: '$4',
  backgroundColor: '$slate100',
  borderBottom: '1px solid $slate300',
  marginBottom: '$4',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const Row = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$2',
})
