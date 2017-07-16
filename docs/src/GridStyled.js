import React from 'react'
import {
  Text,
  Link,
  Code,
} from 'rebass'
import Section from './Section'
import Live from './Live'

const GridStyled = props => (
  <Section name='Grid Styled'>
    <Text mb={3}>
      Rebass includes the <Code>{'<Flex />'}</Code> and <Code>{'<Box />'}</Code> components from <Link href='http://jxnblk.com/grid-styled'>Grid Styled</Link> for handling responsive layouts.
    </Text>
    <Live code={code} />
  </Section>
)

const code = `<Flex wrap mx={-2}>
  <Box p={2} w={[ 1, 1/2, 1/4 ]}>
    <Box p={1} color='white' bg='blue'>Box</Box>
  </Box>
  <Box p={2} w={[ 1, 1/2, 1/4 ]}>
    <Box p={1} color='white' bg='blue'>Box</Box>
  </Box>
  <Box p={2} w={[ 1, 1/2, 1/4 ]}>
    <Box p={1} color='white' bg='blue'>Box</Box>
  </Box>
  <Box p={2} w={[ 1, 1/2, 1/4 ]}>
    <Box p={1} color='white' bg='blue'>Box</Box>
  </Box>
</Flex>`

export default GridStyled
