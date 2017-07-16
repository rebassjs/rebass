import React from 'react'
import {
  Heading
} from 'rebass'

const PageTitle = props => (
  <Heading
    {...props}
    is='h1'
    f={[ 5, 6, 7, 8 ]}
    my={4}
  />
)

export default PageTitle
