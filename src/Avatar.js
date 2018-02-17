import sys from 'system-components'

export const Avatar = sys({
  is: 'img',
  size: 48,
  borderRadius: '99999px',
}, {
  display: 'inline-block'
},
  'size',
)

Avatar.displayName = 'Avatar'

export default Avatar
