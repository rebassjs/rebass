import React from 'react'
import Text from './Text'

export const Small = props =>
  <Text
    is='small'
    fontSize={0}
    {...props}
  />

Small.displayName = 'Small'

export default Small
