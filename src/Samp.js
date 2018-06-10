import React from 'react'
import sys from 'system-components'
import Code from './Code'

const Base = props =>
  <Code
    is='samp'
    {...props}
  />

export const Samp = sys({
  is: Base
})

Samp.displayName = 'Samp'

export default Samp
