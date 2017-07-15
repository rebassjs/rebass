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
        <Box key={name}>
          <NavLink
            is={Link}
            href={'/components/' + name}
            children={name}
          />
        </Box>
      ))}
    </Flex>
  </Section>
)

export default ComponentsSection
