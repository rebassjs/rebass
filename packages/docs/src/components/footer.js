import React from 'react'
import {
  Box,
  Flex,
  Link,
} from 'rebass'

export default props =>
  <Box
    as='footer'
    py={5}
    color='background'
    bg='text'
  >
    <Box
      sx={{
        maxWidth: 'wide',
        mx: 'auto',
        px: 3,
      }}>
      <Link href='/' variant='nav'>Rebass</Link>
      <Link href='/reflexbox' variant='nav'>Reflexbox</Link>
      <Link href='/getting-started' variant='nav'>Docs</Link>
      <Link href='https://github.com/rebassjs/rebass' variant='nav'>GitHub</Link>
    </Box>
  </Box>
