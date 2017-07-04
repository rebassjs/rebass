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

export const colors = Object.assign({}, palette, {
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
