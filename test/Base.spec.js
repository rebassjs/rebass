
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Base', () => {
  const { fontSizes } = theme
  let tree

  beforeEach(() => {
    renderer.render(<Base />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should not have a className', () => {
    expect(tree.props.className).toNotExist()
  })

  context('when context is set', () => {
    beforeEach(() => {
      renderer.render(<Base componentName='Test' />, {
        rebass: {
          Test: {
            backgroundColor: 'tomato'
          }
        }
      })
      tree = renderer.getRenderOutput()
    })

    it('should have a custom background color', () => {
      expect(tree.props.style.backgroundColor).toEqual('tomato')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Base style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

