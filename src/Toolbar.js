import sys from 'system-components'
import { minHeight } from './utils'

export const Toolbar = sys({
  is: Flex,
  px: 2,
  color: 'white',
  bg: 'grays.9',
  align: 'center',
  minHeight: '48px'
}, minHeight, {
  WebkitFontSmoothing: 'antialiased',
})

Toolbar.displayName = 'Toolbar'

export default Toolbar
