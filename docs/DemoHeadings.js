
import React from 'react'
import { Container, Grid } from 'gridsys'
import { Flex, Box } from 'reflexbox'
import {
  Section,
  SectionHeader,
  Divider,
  Blockquote,
  Heading,
  Text,
} from '../src'

const Headings = (props, {
  rebass: {
    fontSizes
  }
}) => (
  <Section>
    <Container>
      <Grid span={8}>
        <SectionHeader
          heading='Type Scale' />
      </Grid>
      <Grid span={3}>
        {fontSizes.map((size, i) => (
          <Heading
            key={i}
            level={4}
            size={i}
            children={`Heading ${i} (${size}px)`} />
        ))}
      </Grid>
      <Grid span={3}>
        <Heading level={3}>
          Don’t compose without a scale
        </Heading>
        <Divider ml={0} width={128} />
          <Blockquote
            href='http://webtypography.net/3.1.1'
            source='Robert Bringhurst'>
            In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years. […] Use the old familiar scale, or use new scales of your own devising, but limit yourself, at first, to a modest set of distinct and related intervals.
          </Blockquote>
      </Grid>
    </Container>
  </Section>
)

Headings.contextTypes = {
  rebass: React.PropTypes.object
}

export default Headings

