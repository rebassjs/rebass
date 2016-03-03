
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Avatar, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Avatar', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Avatar />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName on Base', () => {
    expect(tree.props.tagName).toEqual('img')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Avatar')
  })

  it('should have default width and height', () => {
    expect(tree.props.width).toEqual(48)
    expect(tree.props.height).toEqual(48)
  })

  context('when size is 32', () => {
    beforeEach(() => {
      renderer.render(<Avatar size={32} />)
      tree = renderer.getRenderOutput()
    })
    it('should change the size', () => {
      expect(tree.props.width).toEqual(32)
      expect(tree.props.height).toEqual(32)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Avatar style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

