// default theme preset
import base from '@theme-ui/preset-base'
import merge from 'deepmerge'

export const preset = merge(base, {
  // add to theme-ui preset
  colors: {
    gray: '#dddddf',
  },

  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
    handle: '0 0 2px rgba(0, 0, 0, .125)',
  },
  // rebass variants
  text: {
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [ 5, 6, 7 ],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary',
      }
    },
    mono: {
      fontFamily: 'monospace',
    }
  },
  buttons: {
    primary: {
      fontSize: 1,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
    },
    secondary: {
      fontSize: 1,
      fontWeight: 'bold',
      color: 'background',
      bg: 'secondary',
      borderRadius: 'default',
    },
  },
  images: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
  },
  cards: {
    default: {
      p: 2,
      bg: 'background',
      boxShadow: 'card',
    },
  },
  forms: {
    field: {
      borderColor: 'gray',
      color: 'text',
      bg: 'background',
      mb: 3,
      ':focus': {
        borderColor: 'primary',
        outline: 'none',
        boxShadow: t => `0 0 2px ${t.colors.primary}`,
      },
    },
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      variant: 'forms.field',
    },
    select: {
      variant: 'forms.field',
    },
    textarea: {
      variant: 'forms.field',
    },
    radio: {},
    checkbox: {},
  },
  styles: {
  }
})

export default preset
