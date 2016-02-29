
import expect from 'expect'
import { theme } from '../src'

describe('theme', () => {
  it('should be an object', () => {
    expect(theme).toBeAn('object')
  })

  it('should have a spacing scale', () => {
    expect(theme.scale).toBeAn('array')
  })

  it('should have a font size scale', () => {
    expect(theme.fontSizes).toBeAn('array')
  })

  it('should have a z-index scale', () => {
    expect(theme.zIndex).toBeAn('array')
  })

  it('should have a colors object', () => {
    expect(theme.colors).toBeAn('object')
  })

  it('should have a primary color', () => {
    expect(theme.colors.primary).toExist()
  })

  it('should have a secondary color', () => {
    expect(theme.colors.secondary).toExist()
  })

  it('should have a default color', () => {
    expect(theme.colors.default).toExist()
  })

  it('should have an info color', () => {
    expect(theme.colors.info).toExist()
  })

  it('should have a success color', () => {
    expect(theme.colors.success).toExist()
  })

  it('should have a warning color', () => {
    expect(theme.colors.warning).toExist()
  })

  it('should have an error color', () => {
    expect(theme.colors.error).toExist()
  })

  it('should have a bold property', () => {
    expect(theme.bold).toEqual(600)
  })

  it('should have a monospace property', () => {
    expect(theme.monospace).toBeA('string')
  })

  it('should have a border radius property', () => {
    expect(theme.borderRadius).toBeA('number')
  })

  it('should have a border color property', () => {
    expect(theme.borderColor).toBeA('string')
  })
})

