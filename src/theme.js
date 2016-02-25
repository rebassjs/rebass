
const colors = {
  black: '#111',
  white: '#fff',
  gray: '#ccc',
  midgray: '#777',
  blue: '#0cf',
  red: '#f30',
  orange: '#f80',
  yellow: '#fc0',
  green: '#0f6',
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

const theme = {
  scale,
  fontSizes,
  colors,
  borderRadius: 2,
  borderColor: colors.gray,
  Button: {
    color: colors.white,
    backgroundColor: colors.blue,
  },
  Toolbar: {
    color: colors.white,
    backgroundColor: colors.blue
  },
  Badge: {
    color: colors.white,
    default: colors.midgray,
    info: colors.blue,
    success: colors.green,
    warning: colors.orange,
    error: colors.red
  },
  Message: {
    color: colors.white,
    default: colors.midgray,
    info: colors.blue,
    success: colors.green,
    warning: colors.orange,
    error: colors.red
  }
}

/* Potential config objects:
 * - progress
 * - range
 */

export default theme

