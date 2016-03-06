
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Card, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Card', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Card />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Card')
  })

  it('should not have a width', () => {
    expect(tree.props.baseStyle.width).toNotExist()
  })

  context('when width is set', () => {
    beforeEach(() => {
      renderer.render(<Card width={256} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a width', () => {
      expect(tree.props.baseStyle.width).toEqual(256)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Card style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

