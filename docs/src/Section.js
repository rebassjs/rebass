import React from 'react'
import {
  Flex,
  Box,
  Container,
  Heading,
  BlockLink,
} from 'rebass'

const Section = props => (
  <Container
    is='section'
    id={props.name}
    px={0}
    py={4}
    >
    <Heading>
      <BlockLink href={'#' + props.name}>
        {props.name}
      </BlockLink>
    </Heading>
    {props.children}
  </Container>
)

export default Section
