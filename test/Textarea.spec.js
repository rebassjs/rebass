
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Textarea, Label, Base, config } from '../src'

const renderer = TestUtils.createRenderer()

describe('Textarea', () => {
  const { colors } = config
  let tree, textarea, label, message

  beforeEach(() => {
    renderer.render(<Textarea name='test_textarea' label='Test' />)
    tree = renderer.getRenderOutput()
    textarea = tree.props.children[1]
    message = tree.props.children[2]
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Textarea')
  })

  it('should have a Label', () => {
    expect(tree.props.children[0].type).toEqual(Label)
  })

  it('should have an textarea element', () => {
    expect(textarea.type).toEqual('textarea')
  })

  it('should not have a message', () => {
    expect(message).toNotExist()
  })

  it('should not set a color', () => {
    expect(tree.props.baseStyle.color).toNotExist()
  })

  context('when hideLabel is set', () => {
    beforeEach(() => {
      renderer.render(<Textarea hideLabel name='test_textarea' label='Test' />)
      tree = renderer.getRenderOutput()
      label = tree.props.children[0]
    })

    it('should have a label', () => {
      expect(label).toExist()
    })

    it('should set the hide prop', () => {
      expect(label.props.hide).toEqual(true)
    })
  })

  context('when message is set', () => {
    beforeEach(() => {
      renderer.render(<Textarea message='Hello' name='test' label='Test' />)
      tree = renderer.getRenderOutput()
      message = tree.props.children[2]
    })

    it('should have a message', () => {
      expect(message.props.children).toEqual('Hello')
    })
  })

  context('when aria-invalid is set', () => {
    beforeEach(() => {
      renderer.render(<Textarea aria-invalid name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Textarea is-invalid')
    })

    it('should change the color', () => {
      expect(tree.props.baseStyle.color).toEqual(colors.error)
    })
  })

  context('when disabled is set', () => {
    beforeEach(() => {
      renderer.render(<Textarea disabled name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Textarea is-disabled')
    })
  })

  context('when readOnly is set', () => {
    beforeEach(() => {
      renderer.render(<Textarea readOnly name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Textarea is-readonly')
    })
  })


  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(
        <Textarea
          name='test_textarea'
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

