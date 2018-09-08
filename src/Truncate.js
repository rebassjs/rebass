import sys from '@rebass/components'
import Text from './Text'

export const Truncate = sys({
  extend: Text
}, {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
})

Truncate.displayName = 'Truncate'

export default Truncate
