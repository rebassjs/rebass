import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Flex,
  Box,
  Pre,
  theme
} from '../src'

const { colors } = theme
const keys = Object.keys(colors)

storiesOf('Colors', module)
  .add('Palx', () => (
    <Flex wrap>
      {keys.map(key => (
        <Box key={key} p={2}>
          <Box
            p={4}
            w={128}
            bg={key}
          />
          <Pre f={0}>{key}</Pre>
        </Box>
      ))}
    </Flex>
  ))
