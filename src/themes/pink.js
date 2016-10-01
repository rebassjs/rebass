
import basic from './basic'

const caps = {
  textTransform: 'uppercase',
  letterSpacing: '.2em'
}

const colors = {
  black: '#111',
  blue: '#5cf',
  green: '#9f9',
  orange: '#fc7',
  red: '#f87',
  pink: '#fcc'
}

const pink = {
  name: 'Pink',
  fontFamily: 'Athelas, Georgia, serif',
  color: colors.black,
  backgroundColor: '#fff',
  borderColor: colors.pink,

  bold: 400,

  colors: {
    ...basic.colors,
    ...colors,
    primary: colors.black,
    secondary: colors.pink,
    info: colors.blue,
    success: colors.green,
    warning: colors.orange,
    error: colors.red,
    gray: colors.pink,
    midgray: colors.pink
  },
  inverted: '#111',

  borderRadius: 0,

  fontSizes: [
    48, 48, 24, 20, 18, 13, 13
  ],

  scale: [
    0, 8, 24, 36, 72
  ],

  Toolbar: {
    minHeight: 60,
    backgroundColor: `rgba(255, 255, 255, ${7 / 8})`,
    color: '#111'
  },

  Banner: {
    backgroundImage: 'none',
    backgroundBlendMode: 'overlay',
    color: colors.black,
    backgroundColor: colors.pink
  },
  Heading: {
    fontStyle: 'italic',
    alt: {
      fontSize: 13,
      opacity: 1,
      fontStyle: 'normal',
      ...caps
    }
  },
  NavItem: {
    ...caps
  },
  Button: {
    ...caps
  },
  Menu: {
    backgroundColor: colors.pink
  },
  Input: {},
  Label: {},
  Pre: {
    fontSize: 12,
    padding: 16,
    borderLeft: 0,
    backgroundColor: colors.pink
  }
}

export default pink

