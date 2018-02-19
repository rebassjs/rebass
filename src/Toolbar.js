import sys from 'system-components'
import { Flex } from 'grid-styled'

export const Toolbar = sys({
  is: Flex,
  px: 2,
  color: 'white',
  bg: 'dark',
  align: 'center',
  minHeight: '48px'
}, 'minHeight', {
  WebkitFontSmoothing: 'antialiased',
})

Toolbar.displayName = 'Toolbar'

export default Toolbar
