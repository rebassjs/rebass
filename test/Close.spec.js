
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Close, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Close', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Close />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName', () => {
    expect(tree.props.tagName).toEqual('button')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Close')
  })

  it('should have title', () => {
    expect(tree.props.title).toEqual('Close')
  })

  it('should contain an ×', () => {
    expect(tree.props.children).toEqual('×')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Close style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

