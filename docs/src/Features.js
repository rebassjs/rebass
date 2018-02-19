import React from 'react'
import {
  Flex,
  Box,
  Text,
  Pre
} from 'rebass'
import Section from './Section'

const Features = props => (
  <Section name='Features'>
    <Flex
      flexWrap='wrap'
      mx={-3}
      mt={3}>
      {features.map(text => (
        <Box
          key={text}
          px={3}
          mb={[ 2, 3, 4 ]}
          width={[ 1, 1/2, 1/4 ]}>
          <Text fontSize={2} fontWeight='bold'>
            {text}
          </Text>
        </Box>
      ))}
    </Flex>
  </Section>
)

const features = [
  'Functional stateless UI components',
  'Style encapsulation with CSS-in-JS and styled-components',
  'No external CSS dependencies',
  'Configurable theming',
  'Extensible base components',
  'Design-system based consistency',
  'Built for responsive web design',
  'Write less custom CSS',
]

export default Features
