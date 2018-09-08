import sys from '@rebass/components'

export const Card = sys({
  p: 2,
  bg: 'white',
  borderRadius: 2,
  boxShadow: 2
}, {
  overflow: 'hidden'
},
  'space',
  'width',
  'color',
  'borderRadius',
  'boxShadow'
)

Card.displayName = 'Card'

export default Card
