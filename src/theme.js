
//
////
// blue #006dfc
// orange #fc8f00
// red #fc2800
// green #00fc11

const monospace = '"Roboto Mono", Menlo, Consolas, monospace'

const baseColors = {
  black: '#111',
  white: '#fff',
  gray: '#ddd',
  midgray: '#888',

  // _blue: '#08e',
  // _red: '#f52',
  // _orange: '#f70',
  // _green: '#1c7',

  blue: '#006dfc',
  orange: '#fc8f00',
  red: '#fc2800',
  // green: '#00fc11',
  green: '#0abf16'
}

const colors = {
  ...baseColors,
  primary: baseColors.blue,
  secondary: baseColors.midgray,
  default: baseColors.black,
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

const theme = {
  scale,
  fontSizes,
  bold,
  monospace,
  zIndex,
  colors,
  borderRadius,
  borderColor,
  boxShadow
}

export default theme

