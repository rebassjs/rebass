import { parseToHsl, hsl, getLuminance } from 'polished'

const names = [
  'red',      // 0
  'orange',   // 30
  'yellow',   // 60
  'lime',     // 90
  'green',    // 120
  'teal',     // 150
  'cyan',     // 180
  'blue',     // 210
  'indigo',   // 240
  'violet',   // 270
  'fuchsia',  // 300
  'pink',     // 330
  'red',      // 360
]

const hueName = h => {
  const i = Math.round((h - 2) / 30)
  const name = names[i]
  return name
}

const createHues = h =>
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
    .map(n => Math.floor((h + (n * 360 / 12)) % 360))

export const createColors = base => {
  const colors = {
    black: '#000',
    white: '#fff',
    darken: 'rgba(0, 0, 0, 0.25)',
    gray: '#eee'
  }

  const { hue, saturation, lightness } = parseToHsl(base)
  const hues = createHues(hue)
  hues.forEach(h => {
    const name = hueName(h)
    colors[name] = hsl(h, saturation, lightness)
  })

  return colors
}

export const invertLuminance = base => {
  const luminance = getLuminance(base)
  const { hue, saturation } = parseToHsl(base)
  return hsl(hue, saturation, 1 - luminance)
}

export const colors = createColors('#06e')

export default colors
