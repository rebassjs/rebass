import palx from 'palx'

export const breakpoints = [
  32,
  48,
  64,
  80
].map(n => n + 'em')

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

export const fontWeights = {
  normal: 400,
  bold: 700
}

const palette = palx('#07c')

const hues = Object.keys(palette).reduce((a, key) => {
  const val = palette[key]
  if (Array.isArray(val)) {
    a[key] = val[5]
    a[key + 's'] = val
  }
  return a
}, {})

export const colors = Object.assign({}, hues, {
  black: '#000',
  white: '#fff'
})

console.log(colors)

export const radii = [ 0, 2, 4 ]

export const fonts = {
  0: 'system-ui, sans-serif',
  sans: 'system-ui, sans-serif',
  mono: 'Menlo, monospace'
}

export const shadows = [
  'none',
  `inset 0 0 0 1px ${colors.grays[2]}`,
  `inset 0 0 0 1px ${colors.grays[2]}, 0 0 4px ${colors.grays[2]}`,
]

export default {
  breakpoints,
  space,
  fontSizes,
  fontWeights,
  fonts,
  colors,
  radii,
  shadows,
}
