import sys from '@rebass/components'
import Badge from './Badge'

export const Circle = sys({
  extend: Badge,
  size: 24,
  align: 'center',
  borderRadius: '99999px'
},
  'textAlign',
  'borderRadius',
  'size'
)

Circle.displayName = 'Circle'

export default Circle
