import React from 'react'
import { scope } from '@compositor/x0/components'
import {
  Box,
  Flex,
  Heading,
  Text,
  Code,
  Pre,
  colors
} from '../src'

const {
  h1: Title,
  p: P,
  a: Link,
} = scope

const keys = Object.keys(colors)

export default props =>
  <React.Fragment>
    <Title>
      Built-in Colors
    </Title>
    <P>
      The default theme in Rebass includes {keys.length} colors to help get you started.
      Theming can be completely customized using the <Link href='theming'>Provider</Link> component.
    </P>
    <Flex
      mx={-2}
      justifyContent='space-between'
      flexWrap='wrap'>
      {keys.map(key => (
        <Box key={key} p={2}>
          <Box
            width={128}
            p={5}
            bg={colors[key]}
          />
          <Text fontSize={1}>
            {key}
          </Text>
          <Pre fontSize={10}>{colors[key]}</Pre>
        </Box>
      ))}
    </Flex>
  </React.Fragment>
