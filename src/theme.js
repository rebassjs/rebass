
import clrs from 'colors.css'

const { blue, red, orange, green } = clrs

const monospace = `'Roboto Mono', Menlo, Consolas, monospace`

const colors = {
  black: '#111',
  white: '#fff',
  gray: '#ccc',
  midgray: '#777',
  blue,
  red,
  orange,
  green
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

const colorTypes = {
  default: colors.midgray,
  info: colors.blue,
  success: colors.green,
  warning: colors.orange,
  error: colors.red
}

const zIndex = [
  0,
  2,
  4,
  8,
  16
]

const bold = 600
const borderRadius = 4 // 2
const borderColor = colors.gray

const theme = {
  scale,
  fontSizes,
  bold,
  monospace,
  zIndex,
  colors,
  borderRadius,
  borderColor,
  colorTypes
}

/* Potential config objects:
 * - progress
 * - range
 */

export default theme

