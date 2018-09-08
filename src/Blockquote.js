import sys from '@rebass/components'
import Text from './Text'

export const Blockquote = sys({
  is: 'blockquote',
  extend: Text,
  fontSize: 3,
  m: 0
})

Blockquote.displayName = 'Blockquote'

export default Blockquote
