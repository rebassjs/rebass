
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { InlineForm, Input, ButtonOutline, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('InlineForm', () => {
  let tree, input, button

  beforeEach(() => {
    renderer.render(<InlineForm name='inlineform' label='Test' />)
    tree = renderer.getRenderOutput()
    input = tree.props.children[0]
    button = tree.props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName', () => {
    expect(tree.props.tagName).toEqual('form')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('InlineForm')
  })

  it('should have an Input component', () => {
    expect(input.type).toEqual(Input)
  })

  it('should add the label', () => {
    expect(input.props.label).toEqual('Test')
  })

  it('should add the name', () => {
    expect(input.props.name).toEqual('inlineform')
  })

  it('should have an ButtonOutline component', () => {
    expect(button.type).toEqual(ButtonOutline)
  })

  context('when value is set', () => {
    beforeEach(() => {
      renderer.render(
        <InlineForm
          name='inlineform'
          label='Test'
          value='Hi' />
      )
      tree = renderer.getRenderOutput()
      input = tree.props.children[0]
    })
    it('should change the input value', () => {
      expect(input.props.value).toEqual('Hi')
    })
  })

  context('when placeholder is set', () => {
    beforeEach(() => {
      renderer.render(
        <InlineForm
          name='inlineform'
          label='Test'
          placeholder='Hi' />
      )
      tree = renderer.getRenderOutput()
      input = tree.props.children[0]
    })
    it('should change the input placeholder', () => {
      expect(input.props.placeholder).toEqual('Hi')
    })
  })

  context('when buttonLabel is set', () => {
    beforeEach(() => {
      renderer.render(
        <InlineForm
          name='inlineform'
          label='Test'
          buttonLabel='Hello' />
      )
      tree = renderer.getRenderOutput()
      button = tree.props.children[1]
    })
    it('should change the button label', () => {
      expect(button.props.children).toEqual('Hello')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(
        <InlineForm
          name='inlineform'
          label='Test'
          style={{ color: 'tomato' }} />
      )
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

