import sys from '@rebass/components'

export const BlockLink = sys({
  is: 'a',
  color: 'inherit'
}, {
  display: 'block',
  textDecoration: 'none'
}, 'space', 'color', 'width')

BlockLink.displayName = 'BlockLink'

export default BlockLink
