
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { DropdownMenu, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('DropdownMenu', () => {
  let tree

  beforeEach(() => {
    renderer.render(<DropdownMenu />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('DropdownMenu')
  })

  it('should default to display none', () => {
    expect(tree.props.baseStyle.display).toEqual('none')
  })

  it('should anchor to the bottom left', () => {
    expect(tree.props.baseStyle.top).toEqual('100%')
    expect(tree.props.baseStyle.bottom).toEqual('auto')
    expect(tree.props.baseStyle.left).toEqual(0)
    expect(tree.props.baseStyle.right).toEqual('auto')
  })

  context('when open is true', () => {
    beforeEach(() => {
      renderer.render(<DropdownMenu open />)
      tree = renderer.getRenderOutput()
    })
    it('should not have display set', () => {
      expect(tree.props.baseStyle.display).toNotExist()
    })
  })

  context('when top is true', () => {
    beforeEach(() => {
      renderer.render(<DropdownMenu open top />)
      tree = renderer.getRenderOutput()
    })
    it('should anchor to the top', () => {
      expect(tree.props.baseStyle.top).toEqual('auto')
      expect(tree.props.baseStyle.bottom).toEqual('100%')
    })
  })

  context('when right is true', () => {
    beforeEach(() => {
      renderer.render(<DropdownMenu open right />)
      tree = renderer.getRenderOutput()
    })
    it('should anchor to the right', () => {
      expect(tree.props.baseStyle.left).toEqual('auto')
      expect(tree.props.baseStyle.right).toEqual(0)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<DropdownMenu style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

