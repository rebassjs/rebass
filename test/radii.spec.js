
import expect from 'expect'
import radii from '../src/util/radii'

describe('radii util', () => {
  const props = {}

  it('should return null', () => {
    const r = radii()
    expect(r).toBe(null)
  })

  it('should return borderRadius when rounded is true', () => {
    const r = radii({ rounded: true }, 4)
    expect(r).toEqual(4)
  })

  it('should return borderRadius 0 when rounded is false', () => {
    const r = radii({ rounded: false }, 4)
    expect(r).toEqual(0)
  })

  it('should return top borderRadius when rounded is top', () => {
    const r = radii({ rounded: 'top' }, 4)
    expect(r).toEqual('4px 4px 0 0')
  })

  it('should return right borderRadius when rounded is right', () => {
    const r = radii({ rounded: 'right' }, 4)
    expect(r).toEqual('0 4px 4px 0')
  })

  it('should return bottom borderRadius when rounded is bottom', () => {
    const r = radii({ rounded: 'bottom' }, 4)
    expect(r).toEqual('0 0 4px 4px')
  })

  it('should return left borderRadius when rounded is left', () => {
    const r = radii({ rounded: 'left' }, 4)
    expect(r).toEqual('4px 0 0 4px')
  })

  it('should return 99999 borderRadius when pill is true', () => {
    const r = radii({ pill: true }, 4)
    expect(r).toEqual(99999)
  })

  it('should return 99999 borderRadius when circle is true', () => {
    const r = radii({ circle: true }, 4)
    expect(r).toEqual(99999)
  })
})

