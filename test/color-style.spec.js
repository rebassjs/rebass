
import expect from 'expect'
import { config } from '../src'
import colorStyle from '../src/util/color-style'

describe('colorStyle util', () => {
  const { colors } = config

  it('should return an object', () => {
    const c = colorStyle()
    expect(c).toBeAn('object')
  })

  it('should return an empty object by default', () => {
    const c = colorStyle()
    expect(c).toEqual({})
  })

  it('should return color when set to a key', () => {
    const c = colorStyle({ color: 'blue' }, colors)
    expect(c).toEqual({ color: colors.blue })
  })

  it('should return color when set to a string', () => {
    const c = colorStyle({ color: '#f00' }, colors)
    expect(c).toEqual({ color: '#f00' })
  })

  it('should return background color when set to a key', () => {
    const c = colorStyle({ backgroundColor: 'blue' }, colors)
    expect(c).toEqual({ backgroundColor: colors.blue })
  })

  it('should return background color when set to a string', () => {
    const c = colorStyle({ backgroundColor: '#f00' }, colors)
    expect(c).toEqual({ backgroundColor: '#f00' })
  })

  it('should return color when theme is set to a key', () => {
    const c = colorStyle({ theme: 'blue' }, colors)
    expect(c).toEqual({ color: colors.blue })
  })

  it('should not return color when theme is set to a string', () => {
    const c = colorStyle({ theme: '#f00' }, colors)
    expect(c).toEqual({ })
  })

  it('should return color and background color when theme is set to a key and inverted is true', () => {
    const c = colorStyle({ inverted: true, theme: 'blue' }, colors)
    expect(c).toEqual({ color: colors.white, backgroundColor: colors.blue })
  })

  it('should not return color when theme is set to a string and inverted is true', () => {
    const c = colorStyle({ inverted: true, theme: '#f00' }, colors)
    expect(c).toEqual({ })
  })

  it('should return color and background color when set', () => {
    const c = colorStyle({ backgroundColor: '#f00', color: 'primary' }, colors)
    expect(c).toEqual({ backgroundColor: '#f00', color: colors.primary })
  })
})

