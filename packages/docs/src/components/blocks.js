import React from 'react'
import { Box } from 'rebass'

export const Container = props =>
  <Box
    {...props}
    sx={{
      maxWidth: 'wide',
      mx: 'auto',
      px: 4,
    }}
  />

export const Banner = props =>
  <Box
    {...props}
    sx={{
      color: 'white',
      bg: 'black',
    }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 'wide',
        minHeight: 'calc(100vh - 64px)',
        mx: 'auto',
        px: 4,
        py: [4, 5],
        h1: {
          variant: 'text.caps',
          fontSize: 3,
        },
        pre: {
          p: 0,
          mb: 0,
          bg: 'transparent',
        }
      }}>
      {props.children}
    </Box>
  </Box>

export const LogoGrid = props =>
  <Box
    {...props}
    sx={{
      display: 'grid',
      gridGap: 16,
      gridTemplateColumns: [
        'auto',
        'auto',
        'repeat(2, 1fr)',
      ],
      alignItems: 'center',
    }}
  />

export const Grid = ({
  width = 256,
  ...props
}) =>
  <Box
    {...props}
    sx={{
      ul: {
        listStyle: 'none',
        p: 0,
        display: 'grid',
        gridGap: 32,
        gridTemplateColumns: `repeat(auto-fit, minmax(${width}px, 1fr))`,
      },
      li: {
        fontWeight: 'bold',
        // fontSize: 0,
        // variant: 'text.caps',
      },
    }}
  />

export const NavGrid = props =>
  <Box
    {...props}
    sx={{
      ul: {
        listStyle: 'none',
        p: 0,
        display: 'grid',
        gridGap: 16,
        gridTemplateRows: [
          `repeat(8, 1fr)`,
          `repeat(4, 1fr)`,
        ],
        gridTemplateColumns: [
          'repeat(2, 1fr)',
          'repeat(4, 1fr)',
        ],
        gridAutoFlow: 'column',
        counterReset: 'nav-grid',
      },
      li: {
        fontWeight: 'bold',
        fontSize: 0,
        variant: 'text.caps',
        counterIncrement: 'nav-grid',
        '::before': {
          content: 'counter(nav-grid)',
          display: 'inline-block',
          width: 16,
          pr: [1, 2, 3],
        }
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
        transition: 'color .2s ease-out',
        ':hover,:focus': {
          color: 'primary',
        }
      }
    }}
  />

