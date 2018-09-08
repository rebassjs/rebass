import sys from '@rebass/components'
import { Box } from '@rebass/grid'

export const Container = sys({
  extend: Box,
  px: 3,
  mx: 'auto',
  maxWidth: 1024
},
  'maxWidth',
)

Container.displayName = 'Container'

export default Container
