import colors from './colors'

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

export { default as colors } from './colors'

export const radii = [ 0, 2, 4 ]

export const fonts = {
  0: 'system-ui, sans-serif',
  sans: 'system-ui, sans-serif',
  mono: '"SF Mono", "Roboto Mono", Menlo, monospace'
}

export const shadows = [
  'none',
  `inset 0 0 0 1px ${colors.gray}`,
  `inset 0 0 0 1px ${colors.gray}, 0 0 4px ${colors.gray}`,
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
