import sys from 'system-components'

export const BlockLink = sys({
  is: 'a',
  color: 'inherit'
}, {
  display: 'block',
  textDecoration: 'none'
}, 'space')

BlockLink.displayName = 'BlockLink'

export default BlockLink
