
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Section,
  SectionHeader,
  Divider,
  Heading,
  Text,
} from '../../src'

const Headings = ({ fontSizes }) => (
  <Section>
    <SectionHeader
      heading='Type Scale' />
    <Flex gutter={3} sm>
      <Box sm={7} px={3}>
        {fontSizes.map((size, i) => (
          <Heading
            key={i}
            level={4}
            size={i}
            children={`Heading ${1} (${size}px)`} />
        ))}
      </Box>
      <Box sm={5} px={3}>
        <Heading level={3}>
          Don’t compose without a scale
        </Heading>
        <Divider ml={0} width={128} />
        <Text>
          “In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years. […] Use the old familiar scale, or use new scales of your own devising, but limit yourself, at first, to a modest set of distinct and related intervals.”
        </Text>
      </Box>
    </Flex>
  </Section>
)

export default Headings

