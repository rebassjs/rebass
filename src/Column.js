import sys from 'system-components'
import { Box } from 'grid-styled'

export const Column = sys({
  is: Box,
  px: 3,
  mb: 4,
  flex: '1 1 auto'
})

Column.displayName = 'Column'

export default Column
