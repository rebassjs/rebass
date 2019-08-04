import preset from '@rebass/preset'
import merge from 'lodash.merge'
import prism from '@theme-ui/prism/presets/theme-ui'

export default merge(preset, {
  initialColorMode: 'lite',
  useCustomProperties: true,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    secondary: '#a0c',
    accent: '#f0a',
    muted: '#f6f6ff',
    gray: '#444',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0ff',
        secondary: '#b0f',
        accent: '#f0b',
        muted: '#111',
        gray: '#999',
      },
      gray: {
        text: '#fff',
        background: 'hsl(270, 30%, 14%)',
        primary: 'hsl(180, 100%, 60%)',
        secondary: 'hsl(270, 100%, 60%)',
        accent: 'hsl(300, 100%, 60%)',
        muted: 'hsl(270, 50%, 8%)',
        gray: 'hsl(270, 50%, 70%)',
      }
    }
  },
  sizes: {
    wide: 1280,
  },
  buttons: {
    big: {
      variant: 'buttons.primary',
      px: 4,
      py: 3,
      fontSize: 3,
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    },
    transparent: {
      color: 'inherit',
      bg: 'transparent',
      ':hover,:focus': {
        color: 'primary',
        outline: 'none',
        boxShadow: '0 0 0 2px',
      }
    },
  },
  styles: {
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
    },
    pre: {
      ...prism,
      fontFamily: 'monospace',
      fontSize: 1,
      overflowX: 'auto',
      bg: 'muted',
      p: 3,
      mb: 4,
      borderRadius: 4,
    },
    blockquote: {
      p: 0,
      mx: 0,
      fontWeight: 'bold',
      fontSize: 3,
    },
    h1: {
      variant: 'text.heading',
      mt: 0,
      fontSize: [ 5, 6, 7 ],
    }
  }
})
