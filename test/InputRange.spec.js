
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { InputRange, Label } from '../src'

const renderer = TestUtils.createRenderer()

describe('InputRange', () => {
  let tree, input, label

  beforeEach(() => {
    renderer.render(<InputRange name='test_input' label='Test' />)
    tree = renderer.getRenderOutput()
    label = tree.props.children[1]
    input = tree.props.children[2]
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('InputRange')
  })

  it('should have a style tag', () => {
    expect(tree.props.children[0].type).toEqual('style')
  })

  it('should have a Label', () => {
    expect(label.type).toEqual(Label)
  })

  it('should have an input element', () => {
    expect(input.type).toEqual('input')
  })

  it('should have a range type', () => {
    expect(input.props.type).toEqual('range')
  })

  context('when hideLabel is set', () => {
    beforeEach(() => {
      renderer.render(<InputRange hideLabel name='test_input' label='Test' />)
      tree = renderer.getRenderOutput()
      label = tree.props.children[1]
    })

    it('should have a label', () => {
      expect(label).toExist()
    })

    it('should set the hide prop', () => {
      expect(label.props.hide).toEqual(true)
    })
  })

  context('when m0 is true', () => {
    beforeEach(() => {
      renderer.render(<InputRange name='test' label='Test' m0 />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[2]
    })
    it('should remove margin-bottom', () => {
      expect(input.props.style.marginBottom).toEqual(0)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(
        <InputRange
          name='test_input'
          label='Test'
          style={{ color: 'tomato' }} />
      )
      tree = renderer.getRenderOutput()
      input = tree.props.children[2]
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

