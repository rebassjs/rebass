import sys from 'system-components'

export const Avatar = sys({
  is: 'img',
  size: 48,
  borderRadius: '99999px',
}, {
  display: 'inline-block'
},
  'space',
  'color',
  'size',
)

Avatar.displayName = 'Avatar'

export default Avatar
