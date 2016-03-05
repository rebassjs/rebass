
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Section,
  SectionHeader,
  Block
} from '../../src'

const Colors = ({ colors }) => (
  <Section>
    <SectionHeader heading='Colors' />
    <Flex wrap gutter={2}>
      {Object.keys(colors).map(key => {
        const color = colors[key]
        return (
          <Box key={key} col={4} sm={3} md={2}>
            <Block
              m={2}
              py={3}
              backgroundColor={color}>
              {key}
            </Block>
          </Box>
        )
      })}
    </Flex>
  </Section>
)

export default Colors

