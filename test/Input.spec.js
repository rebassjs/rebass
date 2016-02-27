
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Input, Label } from '../src'

const renderer = TestUtils.createRenderer()

describe('Input', () => {
  const { fontSizes } = theme
  let tree, input

  beforeEach(() => {
    renderer.render(<Input name='test_input' label='Test' />)
    tree = renderer.getRenderOutput()
    input = tree.props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Input')
  })

  it('should have a Label', () => {
    expect(tree.props.children[0].type).toEqual(Label)
  })

  it('should have an input element', () => {
    expect(input.type).toEqual('input')
  })

  context('when type is set', () => {
    beforeEach(() => {
      renderer.render(<Input type='number' name='test_input' label='Test' />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })
    it('should have a number type', () => {
      expect(input.props.type).toEqual('number')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Input style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })

    it('should have a custom color', () => {
      expect(input.props.style.color).toEqual('tomato')
    })
  })
})

