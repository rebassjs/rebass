
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Section,
  SectionHeader,
  Text,
  Code,
  Block
} from '../../src'

const uniq = obj => {
  let values = []
  return Object.keys(obj)
    .filter(key => {
      const isDupe = values.indexOf(obj[key]) > -1
      values.push(obj[key])
      return !isDupe
    })
    .reduce((a, key) => {
      a[key] = obj[key]
      return a
    }, {})
}

const Colors = (props, { rebass }) => (
  <Section id='Colors'>
    <SectionHeader heading='Colors' />
    <Flex wrap mx={-2}>
      {Object.keys(uniq(rebass.colors)).map((key, i) => (
        <Box
          key={i}
          m={2}>
          <Block
            p={4}
            backgroundColor={rebass.colors[key]}
          />
          <Text>
            {key} <Code>{rebass.colors[key]}</Code>
          </Text>
        </Box>
      ))}
    </Flex>
  </Section>
)

Colors.contextTypes = {
  rebass: React.PropTypes.object
}

export default Colors

