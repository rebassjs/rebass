
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Label, Radio } from '../src'

const renderer = TestUtils.createRenderer()

describe('Radio', () => {
  const { colors } = theme
  let tree, label

  beforeEach(() => {
    renderer.render(<Radio name='test' label='Radio'/>)
    tree = renderer.getRenderOutput()
    label = tree.props.children
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Radio')
  })

  it('should have a Label', () => {
    expect(label.type).toEqual(Label)
  })

  it('should have an input', () => {
    expect(label.props.children[0].type).toEqual('input')
    expect(label.props.children[0].props.type).toEqual('radio')
  })

  it('should not set a color', () => {
    expect(tree.props.style.color).toNotExist()
  })

  context('when aria-invalid is set', () => {
    beforeEach(() => {
      renderer.render(<Radio aria-invalid name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Radio is-invalid')
    })

    it('should change the color', () => {
      expect(tree.props.style.color).toEqual(colors.error)
    })
  })

  context('when disabled is set', () => {
    beforeEach(() => {
      renderer.render(<Radio disabled name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Radio is-disabled')
    })
  })

  context('when readOnly is set', () => {
    beforeEach(() => {
      renderer.render(<Radio readOnly name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Radio is-readonly')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Radio name='test_radio' label='Test' style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

