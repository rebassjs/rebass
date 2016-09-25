
import expect from 'expect'
import borderStyles from '../src/util/border-styles'

describe('borderStyles util', () => {
  it('should return an object', () => {
    const b = borderStyles()
    expect(b).toBeAn('object')
  })

  it('should return an empty object when called without arguments', () => {
    const b = borderStyles()
    expect(b).toEqual({})
  })

  it('should return a solid border when set to true', () => {
    const b = borderStyles({
      border: true
    })

    expect(b).toEqual({
      borderStyle: 'solid'
    })
  })

  it('should explicitly return no border when set to false', () => {
    const b = borderStyles({
      border: false
    })

    expect(b).toEqual({
      borderStyle: 'none'
    })
  })

  it('should return a solid border for sides when they are set to true', () => {
    const b = borderStyles({
      borderLeft: true
    })

    expect(b).toEqual({
      borderLeftStyle: 'solid'
    })
  })

  it('should explicitly return no border for sides when they are set to true', () => {
    const b = borderStyles({
      border: true,
      borderRight: false
    })

    expect(b).toEqual({
      borderStyle: 'solid',
      borderRightStyle: 'none'
    })
  })

  it('should set border width attributes when passed a number', () => {
    const b = borderStyles({
      border: 1,
      borderLeft: 2,
      borderRight: 3
    })

    expect(b).toEqual({
      borderStyle: 'solid',
      borderWidth: '1px',
      borderLeftStyle: 'solid',
      borderLeftWidth: '2px',
      borderRightStyle: 'solid',
      borderRightWidth: '3px'
    })
  })
})

