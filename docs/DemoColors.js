
import React from 'react'
import { Container, Grid } from 'gridsys'
import { Flex, Box } from 'reflexbox'
import {
  Section,
  SectionHeader,
  Block
} from '../src'

const Colors = (props, {
  rebass: {
    colors
  }
}) => (
  <Section>
    <Container>
      <Grid span={8}>
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
      </Grid>
    </Container>
  </Section>
)

Colors.contextTypes = {
  rebass: React.PropTypes.object
}

export default Colors

