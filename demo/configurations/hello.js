
import { config } from '../../src'

const borderWidth = 4
const borderColor = '#346'

const colors = {
  black: '#346',
  blue: '#0df',
  red: '#f7b',
  green: '#3ea',
  orange: '#fe1',
  gray: '#eef',
  midgray: '#ccd',
}

const hello = {
  name: 'Hello',
  fontFamily: 'Karla, sans-serif',
  letterSpacing: '.1em',
  color: '#346',
  backgroundColor: '#fff',

  colors: {
    ...config.colors,
    ...colors,
    default: colors.midgray,
    primary: colors.blue,
    secondary: colors.midgray,
    info: colors.blue,
    error: colors.blue,
    success: colors.green,
    warning: colors.orange
  },
  inverted: colors.black,

  scale: [
    0, 16, 24, 64, 128
  ],

  bold: 700,

  Toolbar: {
    color: colors.black,
    backgroundColor: '#fff',
    borderBottom: '4px solid'
  },
  Button: {
    fontSize: 20
  },
  ButtonOutline: {
    fontSize: 20,
    backgroundColor: '#346',
    boxShadow: 'inset 0 0 0 4px'
  },
  Message: {
    color: colors.black
  },
  Panel: {
    borderWidth
  },
  PanelFooter: {
    borderWidth
  },
  PageHeader: {
    borderWidth,
    borderColor
  },
  SectionHeader: {
    borderWidth,
    borderColor
  },
  Footer: {
    borderWidth,
    borderColor
  },
}

export default hello

