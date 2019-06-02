import React from 'react'
import { Box } from '../src'

export const Root = props =>
  <Box
    mx='auto'
    px={4}
    pt={4}
    pb={6}
    css={{
      maxWidth: '1024px'
    }}>
    {props.children}
  </Box>

