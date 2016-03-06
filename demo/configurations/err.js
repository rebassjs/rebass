
import { config } from '../../src'

const colors = {
  //white: '#f6f3f0',
  white: `rgba(255, 255, 255, ${6/8})`,
  red2: '#f53',
  red: '#e42',
  darken: `rgba(0, 0, 0, ${1/8})`,
  darken2: `rgba(0, 0, 0, ${1/4})`,
  blue: '#745',
  green: '#764',
}

const err = {
  name: 'ERR',
  fontFamily: '"Roboto Mono", monospace',
  letterSpacing: '.1em',
  color: colors.white,
  backgroundColor: colors.red2,

  colors: {
    ...config.colors,
    ...colors,
    gray: colors.darken,
    midgray: colors.darken2,
    black: colors.red,
    error: colors.red,
    info: colors.blue,
    success: colors.green,
    primary: colors.red,
    secondary: colors.darken,
  },

  borderColor: colors.darken,
  borderRadius: 0,

  fontSizes: [
    64, 64, 32, 16, 16, 12, 12
  ],

  scale: [
    0, 5, 20, 40, 80
  ],

  Banner: {
    backgroundBlendMode: 'multiply'
  },

  Menu: {
    color: colors.white,
    backgroundColor: colors.red,
  },
  Panel: {
    backgroundColor: 'transparent'
  },
}

export default err

