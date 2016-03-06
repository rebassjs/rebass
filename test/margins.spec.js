
import expect from 'expect'
import margins from '../src/util/margins'

describe('margins util', () => {
  const scale = [
    0, 8, 16, 32, 64
  ]

  it('should return an object', () => {
    const m = margins()
    expect(m).toBeAn('object')
  })

  it('should return an empty object by default', () => {
    const m = margins()
    expect(m).toEqual({})
  })

  it('should return margin when m is 0', () => {
    const m = margins({ m: 0 }, scale)
    expect(m.margin).toEqual(0)
  })

  it('should return margin when m is 1', () => {
    const m = margins({ m: 1 }, scale)
    expect(m.margin).toEqual(scale[1])
  })

  it('should return margin when m is 2', () => {
    const m = margins({ m: 2 }, scale)
    expect(m.margin).toEqual(scale[2])
  })

  it('should return margin when m is 3', () => {
    const m = margins({ m: 3 }, scale)
    expect(m.margin).toEqual(scale[3])
  })

  it('should return margin when m is 4', () => {
    const m = margins({ m: 4 }, scale)
    expect(m.margin).toEqual(scale[4])
  })

  it('should return undefined when m is 5', () => {
    const m = margins({ m: 5 }, scale)
    expect(m).toEqual({
      margin: undefined
    })
  })

  it('should return margin left and right when mx is 0', () => {
    const m = margins({ mx: 0 }, scale)
    expect(m).toEqual({
      marginRight: 0,
      marginLeft: 0
    })
  })

  it('should return margin left and right when mx is 1', () => {
    const m = margins({ mx: 1 }, scale)
    expect(m).toEqual({
      marginRight: scale[1],
      marginLeft: scale[1]
    })
  })

  it('should return margin top and bottom when my is 0', () => {
    const m = margins({ my: 0 }, scale)
    expect(m).toEqual({
      marginTop: 0,
      marginBottom: 0
    })
  })

  it('should return margin top and bottom when my is 1', () => {
    const m = margins({ my: 1 }, scale)
    expect(m).toEqual({
      marginTop: scale[1],
      marginBottom: scale[1]
    })
  })

  it('should return margin top when mt is 0', () => {
    const m = margins({ mt: 0 }, scale)
    expect(m).toEqual({
      marginTop: 0
    })
  })

  it('should return margin top when mt is 1', () => {
    const m = margins({ mt: 1 }, scale)
    expect(m).toEqual({
      marginTop: scale[1]
    })
  })

  it('should return margin right when mr is 0', () => {
    const m = margins({ mr: 0 }, scale)
    expect(m).toEqual({
      marginRight: 0
    })
  })

  it('should return margin right when mr is 1', () => {
    const m = margins({ mr: 1 }, scale)
    expect(m).toEqual({
      marginRight: scale[1]
    })
  })

  it('should return margin bottom when mb is 0', () => {
    const m = margins({ mb: 0 }, scale)
    expect(m).toEqual({
      marginBottom: 0
    })
  })

  it('should return margin bottom when mb is 1', () => {
    const m = margins({ mb: 1 }, scale)
    expect(m).toEqual({
      marginBottom: scale[1]
    })
  })

  it('should return margin right when mr is 0', () => {
    const m = margins({ mr: 0 }, scale)
    expect(m).toEqual({
      marginRight: 0
    })
  })

  it('should return margin right when mr is 1', () => {
    const m = margins({ mr: 1 }, scale)
    expect(m).toEqual({
      marginRight: scale[1]
    })
  })

  it('should return override ml with mx', () => {
    const m = margins({ ml: 1, mx: 2 }, scale)
    expect(m).toEqual({
      marginRight: scale[2],
      marginLeft: scale[2]
    })
  })

  it('should return override mt with my', () => {
    const m = margins({ mt: 1, my: 2 }, scale)
    expect(m).toEqual({
      marginTop: scale[2],
      marginBottom: scale[2]
    })
  })
})

