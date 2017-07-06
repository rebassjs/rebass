import React from 'react'
import {
  Flex,
  Box,
  Text,
  Lead,
  Pre,
  Button,
} from 'rebass'
import Section from './Section'

const CTA = props => (
  <Section name='Get Started'>
    <Flex
      mx={-2}
      py={3}
      align='center'
      wrap>
      <Box p={2} w={[ 1, 1/2 ]}>
        <Lead mb={3}>
          Read the docs on GitHub
        </Lead>
        <Button
          is='a'
          f={2}
          href='https://github.com/jxnblk/rebass'
          children='GitHub'
        />
      </Box>
      <Box p={2} w={[ 1, 1/2 ]}>
        <Pre>npm i rebass@next</Pre>
      </Box>
    </Flex>
  </Section>
)

export default CTA
