
const colors = {
  black: '#111',
  white: '#fff',
  gray: '#ccc',
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

const typeScale = [
  48,
  32,
  24,
  20,
  16,
  14,
  12
]

const defaults = {
  font: '-apple-system, BlinkMacSystemFont, sans-serif',
  scale,
  typeScale,
  colors,
  borderRadius: 2,
  borderColor: colors.gray,
  button: {
    bg: colors.blue,
  },
  toolbar: {
  }
}

export default defaults

