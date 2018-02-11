import sys from 'system-components'
import { Flex } from 'grid-styled'

export const Tabs = sys({
  is: Flex,
  borderWidth: 1,
  borderBottom: true,
  borderColor: 'gray'
})

Tabs.displayName = 'Tabs'

export default Tabs
