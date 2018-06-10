import React from 'react'
import sys from 'system-components'
import Text from './Text'

export const Base = props =>
  <Text {...props} is='blockquote' />

export const Blockquote = sys({
  is: Base,
  fontSize: 3,
  m: 0
})

Blockquote.displayName = 'Blockquote'

export default Blockquote
