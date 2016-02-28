
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Textarea, Label } from '../src'

const renderer = TestUtils.createRenderer()

describe('Textarea', () => {
  let tree, textarea, label

  beforeEach(() => {
    renderer.render(<Textarea name='test_textarea' label='Test' />)
    tree = renderer.getRenderOutput()
    textarea = tree.props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
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

  context('when m0 is true', () => {
    beforeEach(() => {
      renderer.render(<Textarea name='test' label='Test' m0 />)
      tree = renderer.getRenderOutput()
      textarea = tree.props.children[1]
    })
    it('should remove margin-bottom', () => {
      expect(textarea.props.style.marginBottom).toEqual(0)
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
      textarea = tree.props.children[1]
    })

    it('should have a custom color', () => {
      expect(textarea.props.style.color).toEqual('tomato')
    })
  })
})

