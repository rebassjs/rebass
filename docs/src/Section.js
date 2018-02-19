import React from 'react'
import {
  Flex,
  Box,
  Heading,
  BlockLink,
} from 'rebass'
import Container from './Container'

const Section = props => (
  <Container
    is='section'
    id={props.name}
    py={4}>
    <Heading mb={2}>
      <BlockLink href={'#' + props.name}>
        {props.name}
      </BlockLink>
    </Heading>
    {props.children}
  </Container>
)

export default Section
