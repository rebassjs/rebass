
import expect from 'expect'
import { config } from '../src'

describe('config', () => {
  it('should be an object', () => {
    expect(config).toBeAn('object')
  })

  it('should have a spacing scale', () => {
    expect(config.scale).toBeAn('array')
  })

  it('should have a font size scale', () => {
    expect(config.fontSizes).toBeAn('array')
  })

  it('should have a z-index scale', () => {
    expect(config.zIndex).toBeAn('array')
  })

  it('should have a colors object', () => {
    expect(config.colors).toBeAn('object')
  })

  it('should have a primary color', () => {
    expect(config.colors.primary).toExist()
  })

  it('should have a secondary color', () => {
    expect(config.colors.secondary).toExist()
  })

  it('should have a default color', () => {
    expect(config.colors.default).toExist()
  })

  it('should have an info color', () => {
    expect(config.colors.info).toExist()
  })

  it('should have a success color', () => {
    expect(config.colors.success).toExist()
  })

  it('should have a warning color', () => {
    expect(config.colors.warning).toExist()
  })

  it('should have an error color', () => {
    expect(config.colors.error).toExist()
  })

  it('should have a bold property', () => {
    expect(config.bold).toEqual(600)
  })

  it('should have a monospace property', () => {
    expect(config.monospace).toBeA('string')
  })

  it('should have a border radius property', () => {
    expect(config.borderRadius).toBeA('number')
  })

  it('should have a border color property', () => {
    expect(config.borderColor).toBeA('string')
  })
})

