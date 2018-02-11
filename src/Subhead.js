import React from 'react'
import Heading from './Heading'

export const Subhead = props =>
  <Heading
    is='h3'
    fontSize={4}
    {...props}
  />

Subhead.displayName = 'Subhead'

export default Subhead
