import React from 'react'
import {
  Flex,
  Box,
  Text,
  Link,
  Pre,
  theme
} from 'rebass'
import Section from './Section'

const { colors } = theme

const keys = Object.keys(colors)
  .filter(key => !/black|white|dark|gray/.test(key))
const ten = Array.from({ length: 10 }).map((n, i) => i)

const Card = props => (
  <Box flex='1 1 auto'>
    <Box
      px={0}
      py={[ 4, 4, 5 ]}
      bg={props.value}
    />
  </Box>
)

const Colors = props => (
  <Section name='Colors'>
    <Text mb={3}>
      Plug in your own colors to customize the default color palette.
    </Text>
    <Flex>
      {keys.map(key => (
        <Card
          key={key}
          name={key}
          value={colors[key]}
        />
      ))}
    </Flex>
  </Section>
)

export default Colors
