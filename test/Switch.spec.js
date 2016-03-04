
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Switch, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Switch', () => {
  let tree, dot

  beforeEach(() => {
    renderer.render(<Switch />)
    tree = renderer.getRenderOutput()
    dot = tree.props.children
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Switch')
  })

  it('should not move the dot', () => {
    expect(dot.props.style.transform).toEqual('translateX(0)')
  })

  context('when checked is true', () => {
    beforeEach(() => {
      renderer.render(<Switch checked />)
      tree = renderer.getRenderOutput()
      dot = tree.props.children
    })
    it('should transform the dot', () => {
      expect(dot.props.style.transform).toEqual('translateX(16px)')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Switch style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

