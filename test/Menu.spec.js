
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Menu, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Menu', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Menu />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Menu')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Menu style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

