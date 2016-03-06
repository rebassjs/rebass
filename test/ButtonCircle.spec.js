
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { ButtonCircle, Button } from '../src'

const renderer = TestUtils.createRenderer()

describe('ButtonCircle', () => {
  let tree

  beforeEach(() => {
    renderer.render(<ButtonCircle />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Button)
  })

  it('should set _className', () => {
    expect(tree.props._className).toEqual('ButtonCircle')
  })

  it('should have a border radius', () => {
    expect(tree.props.style.borderRadius).toEqual(99999)
  })

  context('when size prop is set', () => {
    beforeEach(() => {
      renderer.render(<ButtonCircle size={64} />)
      tree = renderer.getRenderOutput()
    })
    it('should set width and height', () => {
      expect(tree.props.style.width).toEqual(64)
      expect(tree.props.style.height).toEqual(64)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<ButtonCircle style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

