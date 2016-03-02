

import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Fixed } from '../src'

const renderer = TestUtils.createRenderer()

describe('Fixed', () => {
  const { scale } = theme
  let tree

  beforeEach(() => {
    renderer.render(<Fixed />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Fixed')
  })

  it('should not set top by default', () => {
    expect(tree.props.style.top).toNotExist()
  })

  it('should not set right by default', () => {
    expect(tree.props.style.right).toNotExist()
  })

  it('should not set bottom by default', () => {
    expect(tree.props.style.bottom).toNotExist()
  })

  it('should not set left by default', () => {
    expect(tree.props.style.left).toNotExist()
  })

  it('should not set z-index by default', () => {
    expect(tree.props.style.zIndex).toNotExist()
  })

  context('when top is true', () => {
    beforeEach(() => {
      renderer.render(<Fixed top />)
      tree = renderer.getRenderOutput()
    })
    it('should set top: 0', () => {
      expect(tree.props.style.top).toEqual(0)
    })
  })

  context('when right is true', () => {
    beforeEach(() => {
      renderer.render(<Fixed right />)
      tree = renderer.getRenderOutput()
    })
    it('should set right: 0', () => {
      expect(tree.props.style.right).toEqual(0)
    })
  })

  context('when bottom is true', () => {
    beforeEach(() => {
      renderer.render(<Fixed bottom />)
      tree = renderer.getRenderOutput()
    })
    it('should set bottom: 0', () => {
      expect(tree.props.style.bottom).toEqual(0)
    })
  })

  context('when left is true', () => {
    beforeEach(() => {
      renderer.render(<Fixed left />)
      tree = renderer.getRenderOutput()
    })
    it('should set left: 0', () => {
      expect(tree.props.style.left).toEqual(0)
    })
  })

  context('when zIndex is set', () => {
    beforeEach(() => {
      renderer.render(<Fixed zIndex={4} />)
      tree = renderer.getRenderOutput()
    })
    it('should set z-index: 4', () => {
      expect(tree.props.style.zIndex).toEqual(4)
    })
  })

  context('when m is set', () => {
    beforeEach(() => {
      renderer.render(<Fixed m={2} />)
      tree = renderer.getRenderOutput()
    })
    it('should set margin', () => {
      expect(tree.props.style.margin).toEqual(scale[2])
    })
  })

  context('when context is set', () => {
    beforeEach(() => {
      renderer.render(<Fixed />, {
        rebass: {
          Fixed: {
            color: 'tomato'
          }
        }
      })
      tree = renderer.getRenderOutput()
    })
    it('should change the color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Fixed style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

