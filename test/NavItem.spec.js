
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { config, NavItem, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('NavItem', () => {
  const { fontSizes } = config
  let tree

  beforeEach(() => {
    renderer.render(<NavItem />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a default is props', () => {
    expect(tree.props.is).toEqual('a')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('NavItem')
  })

  it('should have default font size', () => {
    expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[5])
  })

  it('should have default padding', () => {
    expect(tree.props.baseStyle.paddingTop).toEqual(8)
  })

  context('when small is true', () => {
    beforeEach(() => {
      renderer.render(<NavItem small />)
      tree = renderer.getRenderOutput()
    })

    it('should have smaller padding', () => {
      expect(tree.props.baseStyle.paddingTop).toEqual(4)
      expect(tree.props.baseStyle.paddingRight).toEqual(8)
    })

    it('should have small font size', () => {
      expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[6])
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<NavItem style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

