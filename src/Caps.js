import sys from 'system-components'
import Text from './Text'
import { letterSpacing } from 'styled-system'

export const Caps = sys({
  is: Text,
  fontSize: 0,
  letterSpacing: '0.2em'
}, {
  textTransform: 'uppercase'
})

Caps.displayName = 'Caps'

export default Caps
