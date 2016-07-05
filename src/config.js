
const monospace = '"Roboto Mono", Menlo, Consolas, monospace'

const baseColors = {
  black: '#111',
  white: '#fff',
  gray: '#ddd',
  midgray: '#888',
  blue: '#08e',
  red: '#f52',
  orange: '#f70',
  green: '#1c7'
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

const inverted = colors.white

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

const config = {
  scale,
  fontSizes,
  bold,
  monospace,
  zIndex,
  colors,
  inverted,
  borderRadius,
  borderColor,
  pureRender: true
}

export default config

