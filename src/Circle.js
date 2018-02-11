import sys from 'system-components'
import { sizeWidth, sizeHeight } from './utils'

export const Circle = sys({
  is: Badge,
  size: 24,
  align: 'center',
  borderRadius: '99999px'
},
  'textAlign',
  sizeWidth,
  sizeHeight
)

Circle.displayName = 'Circle'

export default Circle
