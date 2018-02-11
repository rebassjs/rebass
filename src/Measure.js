import sys from 'system-components'
import { maxWidth } from './utils'

export const Measure = sys({
  maxWidth: '32em'
}, maxWidth)

Measure.displayName = 'Measure'

export default Measure
