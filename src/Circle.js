import sys from 'system-components'
import Badge from './Badge'

export const Circle = sys({
  is: Badge,
  size: 24,
  align: 'center',
  borderRadius: '99999px'
},
  'textAlign',
  'size'
)

Circle.displayName = 'Circle'

export default Circle
