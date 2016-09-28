
const toLongHex = short => {
  if (short.length > 6) return short

  const hex = short.split('').map(d => {
    if (d === '#') return d
    return d + d
  }).join('')

  return hex
}

const toRgb = hex => [0, 0, 0].map((v, i) => {
  const i2 = i * 2
  return parseInt(toLongHex(hex).replace(/^#/, '').slice(i2, i2 + 2), 16)
})

const isDark = hex => {
  if (typeof hex !== 'string' || !/^#/.test(hex)) {
    return null
  }

  const [ r, g, b ] = toRgb(hex)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000

  return yiq < 128
}

export default isDark

