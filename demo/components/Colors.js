
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
    <Flex wrap justify='space-between' gutter={2}>
      {Object.keys(colors).map(key => {
        const color = colors[key]
        return (
          <Box key={key} p={2}>
            <div style={{
              width: 128,
              height: 128,
              backgroundColor: color,
              borderRadius: 99999
            }} />
          </Box>
        )
      })}
    </Flex>
  </Section>
)

export default Colors

