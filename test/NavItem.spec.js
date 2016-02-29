
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, NavItem } from '../src'

const renderer = TestUtils.createRenderer()

describe('NavItem', () => {
  const { fontSizes } = theme
  let tree

  beforeEach(() => {
    renderer.render(<NavItem />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('a')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('NavItem')
  })

  it('should have default font size', () => {
    expect(tree.props.style.fontSize).toEqual(fontSizes[5])
  })

  it('should have default padding', () => {
    expect(tree.props.style.padding).toEqual(8)
  })

  context('when small is true', () => {
    beforeEach(() => {
      renderer.render(<NavItem small />)
      tree = renderer.getRenderOutput()
    })

    it('should have smaller padding', () => {
      expect(tree.props.style.padding).toEqual('4px 8px')
    })

    it('should have small font size', () => {
      expect(tree.props.style.fontSize).toEqual(fontSizes[6])
    })
  })

  context('when setting a custom Component', () => {
    beforeEach(() => {
      renderer.render(<NavItem Component='button' />)
      tree = renderer.getRenderOutput()
    })

    it('should render as a <button>', () => {
      expect(tree.type).toEqual('button')
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

