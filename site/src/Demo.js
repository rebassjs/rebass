import React from 'react'
import {
  Box,
  Heading,
} from 'rebass'
import Live from './Live'

const code = `<Box px={4} py={5} color='white' bg='blue'>
  <Heading
    is='h1'
    fontSize={[ 4, 5, 6 ]}>
    Hello, Rebass
  </Heading>
</Box>
<Flex
  px={4}
  py={5}
  alignItems='center'>
  <Heading color='blue'>
    Beep
  </Heading>
  <Box mx='auto' />
  <Button>
    Beep
  </Button>
  <ButtonOutline ml={2}>
    Boop
  </ButtonOutline>
</Flex>
`

export default () =>
  <Box id='demo' py={5}>
    <Heading mb={3}>Live Demo</Heading>
    <Live code={code} />
  </Box>

