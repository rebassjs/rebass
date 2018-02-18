import React from 'react'
import { Link } from 'rrx'
import {
  Flex,
  Box,
  Text,
  Pre,
  Button,
} from 'rebass'
import Section from './Section'

const CTA = props => (
  <Section name='Get Started'>
    <Text mb={3}>
      Read the docs to get started
    </Text>
    <Flex
      py={3}
      alignItems='center'>
      <Pre
        ml='auto'
        mr={3}
        color='blue'>
        npm i rebass
      </Pre>
      <Button
        is={Link}
        f={2}
        py={[ 2, 3 ]}
        href='/getting-started'
        children='Getting Started'
      />
    </Flex>
  </Section>
)

export default CTA
