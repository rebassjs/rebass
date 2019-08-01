// default theme preset
import base from '@theme-ui/preset-base'

export const preset = {
  ...base,
  colors: {
    ...base.colors,
    black: [
      'rgba(0, 0, 0, 0)',
      'rgba(0, 0, 0, 0.0625)',
      'rgba(0, 0, 0, 0.125)',
      'rgba(0, 0, 0, 0.25)',
      'rgba(0, 0, 0, 0.375)',
      'rgba(0, 0, 0, 0.5)',
      'rgba(0, 0, 0, 0.625)',
      'rgba(0, 0, 0, 0.75)',
      'rgba(0, 0, 0, 0.875)',
      'rgba(0, 0, 0, 1)',
    ],
  },
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: t => `0 0 4px ${t.colors.black[1]}`,
  },
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
      p: 3,
      bg: 'background',
      boxShadow: 'card',
    },
  },
}

export default preset
