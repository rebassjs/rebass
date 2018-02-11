import React from 'react'
import Text from './Text'

export const Blockquote = props =>
  <Text
    is='blockquote'
    fontSize={3}
    m={0}
    {...props}
  />

Blockquote.displayName = 'Blockquote'

export default Blockquote
