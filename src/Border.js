import sys from '@rebass/components'

export const Border = sys({
  border: 1,
  borderColor: 'gray'
},
  'space',
  'width',
  'color',
  'borders',
  'borderColor'
)

Border.displayName = 'Border'

export default Border
