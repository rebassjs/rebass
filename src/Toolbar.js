import sys from '@rebass/components'
import { Flex } from '@rebass/grid'

export const Toolbar = sys({
  extend: Flex,
  px: 2,
  color: 'white',
  bg: 'black',
  alignItems: 'center',
  minHeight: '48px'
}, 'minHeight', {
  WebkitFontSmoothing: 'antialiased',
})

Toolbar.displayName = 'Toolbar'

export default Toolbar
