import sys from '@rebass/components'
import { Flex } from '@rebass/grid'

export const Tabs = sys({
  extend: Flex,
  borderBottom: 1,
  borderColor: 'gray'
}, 'borders', 'borderColor')

Tabs.displayName = 'Tabs'

export default Tabs
