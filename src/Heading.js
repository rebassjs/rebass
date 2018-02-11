import React from 'react'
import sys from 'system-components'

export const Heading = sys({
  is: 'h2',
  fontSize: 5,
  fontWeight: 'bold',
  lineHeight: 1.25,
  m: 0
},
  'color',
  'textAlign'
)

Heading.displayName = 'Heading'

Heading.h1 = props => <Heading {...props} is='h1' />
Heading.h2 = props => <Heading {...props} is='h2' />
Heading.h3 = props => <Heading {...props} is='h3' />
Heading.h4 = props => <Heading {...props} is='h4' />
Heading.h5 = props => <Heading {...props} is='h5' />
Heading.h6 = props => <Heading {...props} is='h6' />

export default Heading
