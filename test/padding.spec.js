
import expect from 'expect'
import padding from '../src/util/padding'

describe('padding util', () => {
  const scale = [
    0, 8, 16, 32, 64
  ]

  it('should return an object', () => {
    const p = padding()
    expect(p).toBeAn('object')
  })

  it('should return an empty object by default', () => {
    const p = padding()
    expect(p).toEqual({})
  })

  it('should return padding when p is 0', () => {
    const p = padding({ p: 0 }, scale)
    expect(p.padding).toEqual(0)
  })

  it('should return padding when p is 1', () => {
    const p = padding({ p: 1 }, scale)
    expect(p.padding).toEqual(scale[1])
  })

  it('should return padding when p is 2', () => {
    const p = padding({ p: 2 }, scale)
    expect(p.padding).toEqual(scale[2])
  })

  it('should return padding when p is 3', () => {
    const p = padding({ p: 3 }, scale)
    expect(p.padding).toEqual(scale[3])
  })

  it('should return padding when p is 4', () => {
    const p = padding({ p: 4 }, scale)
    expect(p.padding).toEqual(scale[4])
  })

  it('should return undefined when p is 5', () => {
    const p = padding({ p: 5 }, scale)
    expect(p).toEqual({
      padding: undefined
    })
  })

  it('should return padding left and right when px is 0', () => {
    const p = padding({ px: 0 }, scale)
    expect(p).toEqual({
      paddingRight: 0,
      paddingLeft: 0
    })
  })

  it('should return padding left and right when px is 1', () => {
    const p = padding({ px: 1 }, scale)
    expect(p).toEqual({
      paddingRight: scale[1],
      paddingLeft: scale[1]
    })
  })

  it('should return padding left and right when py is 0', () => {
    const p = padding({ py: 0 }, scale)
    expect(p).toEqual({
      paddingTop: 0,
      paddingBottom: 0
    })
  })

  it('should return padding top and bottom when py is 1', () => {
    const p = padding({ py: 1 }, scale)
    expect(p).toEqual({
      paddingTop: scale[1],
      paddingBottom: scale[1]
    })
  })

  it('should return padding top when pt is 0', () => {
    const p = padding({ pt: 0 }, scale)
    expect(p).toEqual({
      paddingTop: 0
    })
  })

  it('should return padding top when pt is 1', () => {
    const p = padding({ pt: 1 }, scale)
    expect(p).toEqual({
      paddingTop: scale[1]
    })
  })

  it('should return padding right when pr is 0', () => {
    const p = padding({ pr: 0 }, scale)
    expect(p).toEqual({
      paddingRight: 0
    })
  })

  it('should return padding right when pr is 1', () => {
    const p = padding({ pr: 1 }, scale)
    expect(p).toEqual({
      paddingRight: scale[1]
    })
  })

  it('should return padding bottom when pb is 0', () => {
    const p = padding({ pb: 0 }, scale)
    expect(p).toEqual({
      paddingBottom: 0
    })
  })

  it('should return padding bottom when pb is 1', () => {
    const p = padding({ pb: 1 }, scale)
    expect(p).toEqual({
      paddingBottom: scale[1]
    })
  })

  it('should return padding right when pr is 0', () => {
    const p = padding({ pr: 0 }, scale)
    expect(p).toEqual({
      paddingRight: 0
    })
  })

  it('should return padding right when pr is 1', () => {
    const p = padding({ pr: 1 }, scale)
    expect(p).toEqual({
      paddingRight: scale[1]
    })
  })

  it('should return override pl with px', () => {
    const p = padding({ pl: 1, px: 2 }, scale)
    expect(p).toEqual({
      paddingRight: scale[2],
      paddingLeft: scale[2]
    })
  })

  it('should return override pt with py', () => {
    const p = padding({ pt: 1, py: 2 }, scale)
    expect(p).toEqual({
      paddingTop: scale[2],
      paddingBottom: scale[2]
    })
  })
})

