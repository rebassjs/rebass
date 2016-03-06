
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { ButtonOutline, Button } from '../src'

const renderer = TestUtils.createRenderer()

describe('ButtonOutline', () => {
  let tree

  beforeEach(() => {
    renderer.render(<ButtonOutline />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Button)
  })

  it('should have a className', () => {
    expect(tree.props._className).toEqual('ButtonOutline')
  })

  it('should have a default color', () => {
    expect(tree.props.color).toEqual('primary')
  })

  it('should have a default rounded prop', () => {
    expect(tree.props.rounded).toEqual(true)
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<ButtonOutline style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

