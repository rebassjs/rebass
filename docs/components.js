import React from 'react'
import { Box } from '../src'

export const Root = props =>
  <Box
    mx='auto'
    px={4}
    pt={4}
    pb={6}
    css={{
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '1024px'
    }}>
    {props.children}
  </Box>

