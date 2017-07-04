import React from 'react'
import { Flex, Box } from 'grid-styled'
import {
  Container,
  Heading,
  BlockLink,
} from 'rebass'

const Section = props => (
  <Container
    is='section'
    id={props.name}
    my={6}>
    <Heading>
      <BlockLink href={'#' + props.name}>
        {props.name}
      </BlockLink>
    </Heading>
    {props.children}
  </Container>
)

export default Section
