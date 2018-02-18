import React from 'react'
import {
  Heading,
  Truncate,
  Text,
  theme,
} from 'rebass'
import Section from './Section'

const { fontSizes } = theme
const scale = [ ...fontSizes ].reverse()

const TypographicScale = () => (
  <Section name='Typographic Scale'>
    <Text mb={3}>
      The default typographic scale is based on a 16px base and common sizes, well suited for responsive typography that helps maintain a natural feeling visual rhythm.
    </Text>
    {scale.map(f => (
      <Truncate
        key={f}
        fontSize={f}
        fontWeight='bold'
        lineHeight={1}
        mb={2}
        children={`Aa ${f}px`}
      />
    ))}
  </Section>
)
// children={`${f}px Hello hamburger quick brown fox jumped over the lazy dog.`}

export default TypographicScale
