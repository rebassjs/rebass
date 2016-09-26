
import colorStyle from '../color-style'
import { theme } from '../..'

const { colors } = theme

test('returns an object', () => {
  const sx = colorStyle(colors)()
  expect(typeof sx).toBe('object')
})

test('returns color styles', () => {
  const sx = colorStyle(colors)({
    color: 'blue'
  })
  expect(sx.color).toBe(colors.blue)
})

test('returns background color styles', () => {
  const sx = colorStyle(colors)({
    backgroundColor: 'blue'
  })
  expect(sx.backgroundColor).toBe(colors.blue)
})

