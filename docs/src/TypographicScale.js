import React from 'react'
import {
  Heading,
  Truncate,
  Text,
  fontSizes,
} from 'rebass'
import Section from './Section'

const scale = [ ...fontSizes ].reverse()

const TypographicScale = () => (
  <Section name='Typographic Scale'>
    <Text>
      The default typographic scale is basedo n a 16px base and common sizes, well suited for responsive typography that helps maintain a natural feeling visual rhythm.
    </Text>
    {scale.map(f => (
      <Truncate
        key={f}
        f={f}
        bold
        mb={2}
        children={`${f}px Hello hamburger quick brown fox jumped over the lazy dog.`}
      />
    ))}
  </Section>
)

export default TypographicScale
