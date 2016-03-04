
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { CardImage, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('CardImage', () => {
  let tree

  beforeEach(() => {
    renderer.render(<CardImage />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName', () => {
    expect(tree.props.tagName).toEqual('img')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('CardImage')
  })

  context('when src is set', () => {
    beforeEach(() => {
      renderer.render(<CardImage src='http://placehold.it/256' />)
      tree = renderer.getRenderOutput()
    })
    it('should have a src', () => {
      expect(tree.props.src).toEqual('http://placehold.it/256')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<CardImage style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

