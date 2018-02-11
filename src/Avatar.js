import sys from 'system-components'
import { sizeWidth, sizeHeight } from './utils'

export const Avatar = sys({
  is: 'img',
  size: 48,
  borderRadius: '99999px',
}, {
  display: 'inline-block'
},
  sizeWidth,
  sizeHeight
)

Avatar.displayName = 'Avatar'

export default Avatar
