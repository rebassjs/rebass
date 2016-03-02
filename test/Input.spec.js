
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Input, Label, theme } from '../src'

const renderer = TestUtils.createRenderer()

describe('Input', () => {
  const { colors } = theme
  let tree, input, label, message

  beforeEach(() => {
    renderer.render(<Input name='test' label='Test' />)
    tree = renderer.getRenderOutput()
    input = tree.props.children[1]
    message = tree.props.children[2]
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

  it('should not have a message', () => {
    expect(message).toNotExist()
  })

  it('should not set color', () => {
    expect(tree.props.style.color).toNotExist()
  })

  context('when type is set', () => {
    beforeEach(() => {
      renderer.render(<Input type='number' name='test' label='Test' />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })
    it('should have a number type', () => {
      expect(input.props.type).toEqual('number')
    })
  })

  context('when hideLabel is set', () => {
    beforeEach(() => {
      renderer.render(<Input hideLabel name='test' label='Test' />)
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
      renderer.render(<Input message='Hello' name='test' label='Test' />)
      tree = renderer.getRenderOutput()
      message = tree.props.children[2]
    })

    it('should have a message', () => {
      expect(message.props.children).toEqual('Hello')
    })
  })

  context('when aria-invalid is set', () => {
    beforeEach(() => {
      renderer.render(<Input aria-invalid name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Input is-invalid')
    })

    it('should change the color', () => {
      expect(tree.props.style.color).toEqual(colors.error)
    })
  })

  context('when disabled is set', () => {
    beforeEach(() => {
      renderer.render(<Input disabled name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Input is-disabled')
    })
  })

  context('when readOnly is set', () => {
    beforeEach(() => {
      renderer.render(<Input readOnly name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Input is-readonly')
    })
  })

  context('when rounded is false', () => {
    beforeEach(() => {
      renderer.render(<Input name='test' label='Test' rounded={false} />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })
    it('should not have a border radius', () => {
      expect(input.props.style.borderRadius).toEqual(0)
    })
  })

  context('when rounded is top', () => {
    beforeEach(() => {
      renderer.render(<Input name='test' label='Test' rounded={'top'} />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })
    it('should have top border radii', () => {
      expect(input.props.style.borderRadius).toEqual('2px 2px 0 0')
    })
  })

  context('when rounded is right', () => {
    beforeEach(() => {
      renderer.render(<Input name='test' label='Test' rounded={'right'} />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })
    it('should have right border radii', () => {
      expect(input.props.style.borderRadius).toEqual('0 2px 2px 0')
    })
  })

  context('when rounded is bottom', () => {
    beforeEach(() => {
      renderer.render(<Input name='test' label='Test' rounded={'bottom'} />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })
    it('should have bottom border radii', () => {
      expect(input.props.style.borderRadius).toEqual('0 0 2px 2px')
    })
  })

  context('when rounded is left', () => {
    beforeEach(() => {
      renderer.render(<Input name='test' label='Test' rounded={'left'} />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })
    it('should have left border radii', () => {
      expect(input.props.style.borderRadius).toEqual('2px 0 0 2px')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(
        <Input
          name='test'
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

