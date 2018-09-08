import React from 'react'
import sys from '@rebass/components'
import Text from './Text'

export const Lead = sys({
  extend: Text,
  fontSize: 3,
  lineHeight: 1.25
})

Lead.displayName = 'Lead'

export default Lead
