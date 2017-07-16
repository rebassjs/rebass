import React from 'react'
import { Link } from 'rrx'
import {
  Flex,
  Box,
  Text,
  Code,
  NavLink,
} from 'rebass'
import Section from './Section'
import { components } from './examples'

const ComponentsSection = props => (
  <Section name='Components'>
    <Text mb={3}>
      Rebass includes {components.length} stateless functional components.
    </Text>
    <Flex wrap mx={-2}>
      {components.map(name => (
        <Box key={name}
          w={[ 1/2, 1/3, 1/4, 1/6 ]}>
          <NavLink
            is={Link}
            f={0}
            py={1}
            href={'/components/' + name}
            children={name}
          />
        </Box>
      ))}
    </Flex>
  </Section>
)

export default ComponentsSection
