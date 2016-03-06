
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Section,
  SectionHeader,
  Divider,
  Blockquote,
  Heading,
  Text,
} from '../../src'

const Headings = ({ fontSizes }) => (
  <Section>
    <SectionHeader
      heading='Type Scale' />
    <Flex gutter={3} md>
      <Box md={6} p={3}>
        {fontSizes.map((size, i) => (
          <Heading
            key={i}
            level={4}
            size={i}
            children={`Heading ${i} (${size}px)`} />
        ))}
      </Box>
      <Box md={6} p={3}>
        <Heading level={3}>
          Don’t compose without a scale
        </Heading>
        <Divider ml={0} width={128} />
          <Blockquote
            href='http://webtypography.net/3.1.1'
            source='Robert Bringhurst'>
            In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years. […] Use the old familiar scale, or use new scales of your own devising, but limit yourself, at first, to a modest set of distinct and related intervals.
          </Blockquote>
      </Box>
    </Flex>
  </Section>
)

export default Headings

