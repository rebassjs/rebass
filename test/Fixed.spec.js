
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Base, Fixed } from '../src'

const renderer = TestUtils.createRenderer()

describe('Fixed', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Fixed />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Fixed')
  })

  it('should not set top by default', () => {
    expect(tree.props.baseStyle.top).toNotExist()
  })

  it('should not set right by default', () => {
    expect(tree.props.baseStyle.right).toNotExist()
  })

  it('should not set bottom by default', () => {
    expect(tree.props.baseStyle.bottom).toNotExist()
  })

  it('should not set left by default', () => {
    expect(tree.props.baseStyle.left).toNotExist()
  })

  it('should not set z-index by default', () => {
    expect(tree.props.baseStyle.zIndex).toNotExist()
  })

  context('when top is true', () => {
    beforeEach(() => {
      renderer.render(<Fixed top />)
      tree = renderer.getRenderOutput()
    })
    it('should set top: 0', () => {
      expect(tree.props.baseStyle.top).toEqual(0)
    })
  })

  context('when right is true', () => {
    beforeEach(() => {
      renderer.render(<Fixed right />)
      tree = renderer.getRenderOutput()
    })
    it('should set right: 0', () => {
      expect(tree.props.baseStyle.right).toEqual(0)
    })
  })

  context('when bottom is true', () => {
    beforeEach(() => {
      renderer.render(<Fixed bottom />)
      tree = renderer.getRenderOutput()
    })
    it('should set bottom: 0', () => {
      expect(tree.props.baseStyle.bottom).toEqual(0)
    })
  })

  context('when left is true', () => {
    beforeEach(() => {
      renderer.render(<Fixed left />)
      tree = renderer.getRenderOutput()
    })
    it('should set left: 0', () => {
      expect(tree.props.baseStyle.left).toEqual(0)
    })
  })

  context('when zIndex is set', () => {
    beforeEach(() => {
      renderer.render(<Fixed zIndex={4} />)
      tree = renderer.getRenderOutput()
    })
    it('should set z-index: 4', () => {
      expect(tree.props.baseStyle.zIndex).toEqual(4)
    })
  })

  context('when custom style is set', () => {
    beforeEach(() => {
      renderer.render(<Fixed style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should pass style to the Base component', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

