
const colors = {
  black: '#222',
  white: '#fff',
  blue: '#0080e0',
  darkblue: '#05a',
  green: '#0c7',
  red: '#f40',
  orange: '#f90',
  gray: '#eee',
  midgray: '#576',
  lighten: `rgba(255, 255, 255, ${1 / 16})`,
  darken: `rgba(0, 0, 0, ${1 / 16})`
}

const scale = [
  0,
  8,
  16,
  32,
  64,
  96
]

const fontSizes = [
  48,
  32,
  24,
  20,
  16,
  14,
  12
]

const zIndex = [
  0,
  2,
  4,
  8,
  16
]

const monospace = 'Menlo, Consolas, monospace'
const bold = 600
const borderRadius = 4
const borderColor = colors.darken
const boxShadow = `0 2px 16px ${colors.darken}`

const blue = {
  name: 'Blue',
  fontFamily: '"Avenir Next", -apple-system, Helvetica, sans-serif',
  lineHeight: 1.5,

  scale,
  fontSizes,
  monospace,
  bold,

  colors: {
    ...colors,
    primary: colors.blue,
    secondary: colors.darkblue,
    default: colors.midgray,
    muted: colors.gray,
    info: colors.blue,
    success: colors.green,
    warning: colors.orange,
    error: colors.red
  },

  borderColor,
  borderRadius,
  boxShadow,
  zIndex,

  Button: {
    fontSize: 20,
    fontWeight: 400,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 99999
  },
  ButtonOutline: {
    fontSize: 20,
    fontWeight: 400,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 99999
  },
  NavItem: {
    fontSize: 16
  },
  Input: {
    input: {
      height: 48
    }
  },
  Select: {
    select: {
      height: 48
    },
    arrow: {
      marginTop: 24,
      marginBottom: 24
    }
  },
  Checkbox: {
    box: {
      width: 24,
      height: 24
    }
  },
  Radio: {
    dot: {
      width: 24,
      height: 24
    }
  }
}

export default blue

