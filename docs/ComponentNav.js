import React from 'react'
import { Flex, Box } from 'grid-styled'
import {
  Container,
  Heading,
  NavLink
} from 'rebass'
import { components } from './examples'

const ComponentNav = props => (
  <Container py={5}>
    <Heading mb={3}>
      {components.length} Components
    </Heading>
    <nav>
      <Flex wrap mx={-2}>
        {components.map(name => (
          <NavLink
            w={[ 1/2, 1/3, 1/4, 1/5 ]}
            key={name}
            href={`#${name}`}
            children={name}
          />
        ))}
      </Flex>
    </nav>
  </Container>
)

export default ComponentNav
