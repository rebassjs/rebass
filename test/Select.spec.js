
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Select, Label, theme } from '../src'

const renderer = TestUtils.createRenderer()

describe('Select', () => {
  const { colors } = theme
  let tree, select, message

  beforeEach(() => {
    renderer.render(<Select name='test_select' label='Test' />)
    tree = renderer.getRenderOutput()
    select = tree.props.children[1]
    message = tree.props.children[2]
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Select')
  })

  it('should have a Label', () => {
    expect(tree.props.children[0].type).toEqual(Label)
  })

  it('should have an select element', () => {
    expect(select.type).toEqual('select')
  })

  it('should not have a message', () => {
    expect(message).toNotExist()
  })

  it('should not set a color', () => {
    expect(tree.props.style.color).toNotExist()
  })

  context('when options are set', () => {
    beforeEach(() => {
      renderer.render(
        <Select
          name='test_select'
          label='Test'
          options={[
            { value: 2, label: 'Two' },
            { value: 4, label: 'Four' }
          ]} />
      )
      tree = renderer.getRenderOutput()
      select = tree.props.children[1]
    })
    it('should have child <option> elements', () => {
      expect(select.props.children.length).toEqual(2)
      expect(select.props.children[0].type).toEqual('option')
    })
  })

  context('when message is set', () => {
    beforeEach(() => {
      renderer.render(<Select message='Hello' name='test' label='Test' />)
      tree = renderer.getRenderOutput()
      message = tree.props.children[2]
    })

    it('should have a message', () => {
      expect(message.props.children).toEqual('Hello')
    })
  })

  context('when aria-invalid is set', () => {
    beforeEach(() => {
      renderer.render(<Select aria-invalid name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Select is-invalid')
    })

    it('should change the color', () => {
      expect(tree.props.style.color).toEqual(colors.error)
    })
  })

  context('when disabled is set', () => {
    beforeEach(() => {
      renderer.render(<Select disabled name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Select is-disabled')
    })
  })

  context('when readOnly is set', () => {
    beforeEach(() => {
      renderer.render(<Select readOnly name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Select is-readonly')
    })
  })


  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Select name='test_select' label='Test' style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
      select = tree.props.children[1]
    })

    it('should have a custom color', () => {
      expect(select.props.style.color).toEqual('tomato')
    })
  })
})

