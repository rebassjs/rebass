
const serif = 'Georgia, serif'
const monospace = 'Menlo, Consolas, monospace'

const baseColors = {
  black: '#111',
  white: '#fff',
  gray: '#eee',
  midgray: '#888',
  blue: '#008cef',
  red: '#ef0034',
  orange: '#FFCD29',
  green: '#00ef50',
  lighten: `rgba(255, 255, 255, ${1 / 16})`,
  darken: `rgba(0, 0, 0, ${1 / 16})`
}

const colors = {
  ...baseColors,
  primary: baseColors.blue,
  secondary: baseColors.midgray,
  default: baseColors.black,
  muted: baseColors.gray,
  info: baseColors.blue,
  success: baseColors.green,
  warning: baseColors.orange,
  error: baseColors.red
}

const scale = [
  0,
  8,
  16,
  32,
  64
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

const bold = 600
const borderRadius = 2
const borderColor = 'rgba(0, 0, 0, .25)'
const boxShadow = '0 2px 16px rgba(0, 0, 0, .125)'

const caps = {
  textTransform: 'uppercase',
  letterSpacing: '.2em'
}

const basic = {
  name: 'Basic',
  scale,
  fontSizes,
  bold,
  serif,
  monospace,
  caps,
  zIndex,
  colors,
  borderRadius,
  borderColor,
  boxShadow,
  Heading: {
    alt: {
      ...caps
    }
  }
}

export default basic

