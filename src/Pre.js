import sys from 'system-components'
import { fontFamily } from './utils'

export const Pre = sys({
  is: 'pre',
  fontSize: 1,
  fontFamily: 'mono',
  m: 0
}, {
  overflow: 'auto'
},
  fontFamily,
  'color'
)

Pre.displayName = 'Pre'

export default Pre
