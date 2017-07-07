import React from 'react'
import {
  Text,
  Code,
} from 'rebass'
import Section from './Section'
import { components } from './examples'

const ComponentsSection = props => (
  <Section name='Components'>
    <Text mb={3}>
      Rebass includes {components.length} stateless functional components.
    </Text>
  </Section>
)

export default ComponentsSection
