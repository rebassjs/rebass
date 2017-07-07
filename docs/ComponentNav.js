import React from 'react'
import {
  Flex,
  Box,
  Container,
  Subhead,
  NavLink
} from 'rebass'
import { components } from './examples'

const ComponentNav = props => (
  <Container py={5}>
    <Subhead f={2} mb={3}>
      {components.length} Components
    </Subhead>
    <nav>
      <Flex wrap mx={-2}>
        {components.map(name => (
          <NavLink
            f={0}
            py={1}
            w={[ 1/2, 1 ]}
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
