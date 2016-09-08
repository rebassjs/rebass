
import expect from 'expect'
import borderStyle from '../src/util/border-style'

describe('borderStyle util', () => {
  it('should return an object', () => {
    const b = borderStyle()
    expect(b).toBeAn('object')
  })

  it('should return an object with no border', () => {
    const b = borderStyle()
    expect(b).toEqual({ borderStyle: 'none' })
  })

  it('should return a solid border when set to true', () => {
    const b = borderStyle({ border: true })
    expect(b).toEqual({ borderStyle: 'solid' })
  })

  it('should explicitly return no border when set to false', () => {
    const b = borderStyle({ border: false })
    expect(b).toEqual({ borderStyle: 'none' })
  })

  it('should return a solid border for sides when they are set to true', () => {
    const b = borderStyle({ borderLeft: true })
    expect(b).toEqual({ borderStyle: 'none', borderLeftStyle: 'solid' })
  })

  it('should explicitly return no border for sides when they are set to true', () => {
    const b = borderStyle({ border: true, borderRight: false })
    expect(b).toEqual({ borderStyle: 'solid', borderRightStyle: 'none' })
  })
})

