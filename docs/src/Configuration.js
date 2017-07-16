import React from 'react'
import {
  Text,
  Code,
} from 'rebass'
import Section from './Section'
import Live from './Live'

const Configuration = props => (
  <Section name='Configuration'>
    <Text mb={3}>
      {`The core design system in Rebass can be configured using the `}
      <Code children='<Provider />' /> component.
    </Text>
    <Live code={code} />
  </Section>
)

const code = `<Provider
  theme={{
    font: '"Avenir Next", Helvetica, sans-serif',
    fontSizes: [
      12, 16, 24, 36, 48, 72
    ]
  }}>
  <Heading f={[ 2, 3, 4, 5 ]}>
    Hello
  </Heading>
</Provider>
`

export default Configuration
