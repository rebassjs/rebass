import sys from '@rebass/components'
import Text from './Text'

export const Caps = sys({
  extend: Text,
  fontSize: 0,
  letterSpacing: '0.2em'
}, {
  textTransform: 'uppercase'
}, 'letterSpacing')

Caps.displayName = 'Caps'

export default Caps
