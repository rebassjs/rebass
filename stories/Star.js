import React from 'react'
import { storiesOf } from '@storybook/react'
import { Star, Flex, Text } from '../src'

storiesOf('Star', module)
  .add('Default', () => (
    <Flex>
      <Star checked />
      <Star checked />
      <Star checked />
      <Star half />
      <Star />
    </Flex>
  ))
