import React from 'react'
import {
  StyleProvider,
  NavLinks,
  ScrollTop
} from 'mdx-go/styled-components'
import * as components from '../src'
import { Box } from '../src'

export const Root = props =>
  <StyleProvider
    components={components}
    theme={{
      colors: {
        lightgray: '#f6f6ff',
        blue: '#07c'
      },
      buttons: {
        pill: {
          borderRadius: 99999
        },
        outline: {
          backgroundColor: 'transparent',
          color: 'blue',
          boxShadow: 'inset 0 0 0 2px'
        }
      },
      cards: {
        pop: {
          padding: '32px',
          borderRadius: '8px',
          backgroundColor: 'magenta',
          boxShadow: '0 0 48px rgba(0, 0, 0, .25)'
        }
      }
    }}>
    <Box
      mx='auto'
      px={4}
      pt={4}
      pb={6}
      css={{
        maxWidth: '1024px'
      }}
    >
      {props.children}
    </Box>
    <ScrollTop />
  </StyleProvider>

