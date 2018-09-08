import sys from '@rebass/components'
import Text from './Text'

export const Measure = sys({
  extend: Text,
  maxWidth: '32em'
}, 'maxWidth')

Measure.displayName = 'Measure'

export default Measure
