import React from 'react'
import Text from './Text'

export const Lead = props =>
  <Text
    is='p'
    fontSize={3}
    lineHeight={1.25}
    {...props}
  />

Lead.displayName = 'Lead'

export default Lead
