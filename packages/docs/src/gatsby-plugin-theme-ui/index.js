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
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
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
  text: {
    heading: {
      a: {
        color: 'inherit',
        textDecoration: 'none',
        ':hover': {
          textDecoration: 'underline',
        }
      }
    }
  },
  variants: {
    badge: {
      display: 'inline-block',
      px: 2,
      color: 'background',
      bg: 'primary',
      borderRadius: 'circle',
    },
  },
  styles: {
    a: {
      color: 'primary',
      transition: 'color .2s ease-out',
      ':hover,:focus': {
        color: 'secondary',
      }
    },
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
      fontSize: [5, 6],
    },
    h2: {
      variant: 'text.heading',
      fontSize: [4, 5],
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: { variant: 'text.heading', },
    h5: { variant: 'text.heading', },
    h6: { variant: 'text.heading', },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      py: 2,
      textAlign: 'left',
      borderBottom: t => `4px solid ${t.colors.muted}`,
    },
    td: {
      py: 2,
      textAlign: 'left',
      borderBottom: t => `1px solid ${t.colors.muted}`,
    },
  }
})
