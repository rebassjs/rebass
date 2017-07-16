import React from 'react'
import {
  Text,
  Code,
  Pre,
} from 'rebass'
import Section from './Section'
import Live from './Live'

const ResponsiveStyles = () => (
  <Section name='Responsive Styles'>
    <Text mb={3}>
      All of the core props above accept arrays as values to set mobile-first responsive styles.
      The first value is not scoped to a media query and applies to all breakpoints.
      Each value after the first corresponds to a media query derived from <Code>theme.breakpoints</Code>.
    </Text>
    <Live code={code} />
  </Section>
)

const code = `<Text
  width={[
    1,    // 100% width at the smallest breakpoint
    1/2,  // 50% width at the next breakpoint
    null, // null skips a breakpoint
    1/4   // 25% width at the next
  ]}
  p={2}
  children='Hello'
  color='white'
  bg='blue'
/>`

export default ResponsiveStyles
