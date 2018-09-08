import sys from '@rebass/components'
import Heading from './Heading'

export const Subhead = sys({
  is: 'h3',
  extend: Heading,
  fontSize: 4
})

Subhead.displayName = 'Subhead'

export default Subhead
