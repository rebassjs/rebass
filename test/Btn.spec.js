
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Btn, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Btn', () => {
  const { fontSizes } = theme
  let tree

  beforeEach(() => {
    renderer.render(<Btn />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Btn')
  })

  it('should have default padding', () => {
    expect(tree.props.style.padding).toEqual(8)
  })

  context('when context is set', () => {
    beforeEach(() => {
      renderer.render(<Btn />, {
        rebass: {
          colors: {
            white: '#fff',
            primary: 'tomato'
          },
          Btn: {
            padding: 32
          }
        }
      })
      tree = renderer.getRenderOutput()
    })
    it('should change the background color', () => {
      expect(tree.props.style.backgroundColor).toEqual('tomato')
    })
    it('should change the padding', () => {
      expect(tree.props.style.padding).toEqual(32)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Btn style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

