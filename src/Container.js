import sys from 'system-components'
import { maxWidth } from './utils'

export const Container = sys({
  px: 2,
  mx: 'auto',
  maxWidth: 1024
},
  maxWidth,
  'color'
)

Container.displayName = 'Container'

export default Container
