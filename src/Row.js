import sys from 'system-components'
import { Flex } from 'grid-styled'

export const Row = sys({
  is: Flex,
  mx: -3
})

Row.displayName = 'Row'

export default Row
