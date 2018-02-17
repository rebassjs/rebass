import sys from 'system-components'
import { Flex } from 'grid-styled'

export const Tabs = sys({
  is: Flex,
  borderBottom: 1,
  borderColor: 'gray'
})

Tabs.displayName = 'Tabs'

export default Tabs
