import sys from '@rebass/components'

export const Link = sys({
  is: 'a',
  color: 'blue'
}, 'space', 'color')

Link.displayName = 'Link'

export default Link
