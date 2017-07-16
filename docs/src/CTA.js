import React from 'react'
import { Link } from 'rrx'
import {
  Flex,
  Box,
  Text,
  Lead,
  Pre,
  Button,
} from 'rebass'
import Section from './Section'

const CTA = props => (
  <Section name='Get Started'>
    <Lead mb={3}>
      Read the docs to get started
    </Lead>
    <Flex
      py={3}
      align='center'>
      <Button
        is={Link}
        f={2}
        py={[ 2, 3 ]}
        href='/getting-started'
        children='Getting Started'
      />
      <Pre mx={3} color='blue'>npm i rebass</Pre>
    </Flex>
  </Section>
)

export default CTA
