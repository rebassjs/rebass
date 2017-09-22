import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Flex,
  Box
} from '../src'

storiesOf('Flex', module)
  .add('Default', () => (
    <Flex f={4}>
      <Box w={1/2} m={2} p={2} bg="blue3">Half</Box>
      <Box w={1/2} m={2} p={2} bg="blue3">Half</Box>
    </Flex>
  ))

