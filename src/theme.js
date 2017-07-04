import palx from 'palx'

export const breakpoints = [
  32,
  48,
  64,
  80
]

export const space = [
  0,
  4,
  8,
  16,
  32,
  64,
  128,
]

export const fontSizes = [
  12,
  14,
  16,
  20,
  24,
  32,
  48,
  64,
  72,
  96
]

export const weights = [
  400,
  700
]

const palette = palx('#07c')

const flattened = Object.keys(palette)
  .reduce((a, key) => {
    const value = palette[key]
    if (Array.isArray(value)) {
      a[key] = value[5]
      value.forEach((val, i) => {
        a[key + i] = val
      })
    } else {
      a[key] = value
    }
    return a
  }, {})

// todo: flatten

export const colors = Object.assign({}, flattened, {
  black: '#000',
  white: '#fff'
})

export const radius = 4
export const font = `-apple-system, BlinkMacSystemFont, sans-serif`
export const monospace = '"SF Mono", "Roboto Mono", Menlo, monospace'

export default {
  breakpoints,
  space,
  fontSizes,
  weights,
  font,
  monospace,
  colors,
  radius,
}
