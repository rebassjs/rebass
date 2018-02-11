import sys from 'system-components'
import { fontFamily } from './utils'

export const Code = sys({
  is: 'code',
  fontSize: 1,
  fontFamily: 'mono'
},
  fontFamily
)

Code.displayName = 'Code'

export default Code
