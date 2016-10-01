
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Section,
  SectionHeader,
  Heading,
  Blockquote,
  Text,
  List
} from '../../src'

const Typography = (props, { rebass }) => {
  const { fontSizes } = rebass

  return (
    <Section id='Typography'>
      <SectionHeader heading='Typography' />
      <Flex
        wrap
        align='baseline'
        justify='space-between'
        mx={-2}
        mb={3}>
        {fontSizes.map((size, i) => (
          <Box key={size}
            p={2}>
            <Heading size={i}>
              Aa
            </Heading>
            <Text small>
              {size}px
            </Text>
          </Box>
        ))}
      </Flex>
      <Flex wrap
        mx={-3}>
        <Box sm={8} px={3}>
          <Heading
            size={4}
            mb={2}
            alt>
            Alternative Heading
          </Heading>
          <Text mb={2}>
            In typesetting by hand compositing, a sort or type is a piece of type representing a particular letter or symbol, cast from a matrix mould and assembled with other sorts bearing additional letters into lines of type to make up a form from which a page is printed.
          </Text>
          <Blockquote
            source='Robert Brignhurst'
            mb={2}>
            “The simplest scale is a single note, and sticking with a single note draws more attention to other parameters, such as rhythm and inflection... In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years... This is the typographic equivalent of the diatonic scale.”

          </Blockquote>
        </Box>
        <Box sm={4} px={3}>
          <Heading level={4} mb={2}>
            Ten principles for good design
          </Heading>
          <List ordered>
            <Text>Good design is innovative</Text>
            <Text>Good design makes a product useful</Text>
            <Text>Good design is aesthetic</Text>
            <Text>Good design makes a product understandable</Text>
            <Text>Good design is unobtrusive</Text>
            <Text>Good design is honest</Text>
            <Text>Good design is long-lasting</Text>
            <Text>Good design is thorough down to the last detail</Text>
            <Text>Good design is environmentally-friendly</Text>
            <Text>Good design is as little design as possible</Text>
          </List>
        </Box>
      </Flex>
    </Section>
  )
}

Typography.contextTypes = {
  rebass: React.PropTypes.object
}

export default Typography

