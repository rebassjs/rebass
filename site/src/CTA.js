import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Pre
} from 'rebass'
import { docs, install } from './constants'

export default () =>
  <Box py={5}>
    <Flex flexWrap='wrap' alignItems='center'>
      <Box>
        <Heading mb={2}>
          Getting Started
        </Heading>
        <Text fontWeight='bold' mb={3}>
          Install Rebass now and read the docs to get started
        </Text>
        <Pre mb={3}>{install}</Pre>
      </Box>
      <Box mx='auto' />
      <Box>
        <Button
          is='a'
          fontSize={2}
          py={3}
          href={docs}>
          Documentation
        </Button>
      </Box>
      <Box mx='auto' />
    </Flex>
  </Box>
