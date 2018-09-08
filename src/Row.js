import sys from '@rebass/components'
import { Flex } from '@rebass/grid'

export const Row = sys({
  extend: Flex,
  mx: -3
})

Row.displayName = 'Row'

export default Row
