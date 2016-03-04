
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Toolbar, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Toolbar', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Toolbar />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Toolbar')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Toolbar style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

