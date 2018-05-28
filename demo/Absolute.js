import React from 'react'
import { Relative, Absolute, Text } from '../src'

export default () =>
  <Relative p={3}>
    <Text>Relative</Text>
    <Absolute right={0}>
      Absolute
    </Absolute>
  </Relative>
