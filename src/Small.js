import React from 'react'
import sys from '@rebass/components'
import Text from './Text'

export const Small = sys({
  is: 'small',
  extend: Text,
  fontSize: 0
})

Small.displayName = 'Small'

export default Small
