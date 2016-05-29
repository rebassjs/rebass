
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import jsdom from 'mocha-jsdom'
import { Input, Label, Base, config } from '../src'

const renderer = TestUtils.createRenderer()

describe('Input', () => {
  const { colors } = config
  let tree, input, label, message

  beforeEach(() => {
    renderer.render(<Input name='test' label='Test' />)
    tree = renderer.getRenderOutput()
    input = tree.props.children[1]
    message = tree.props.children[2]
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Input')
  })

  it('should have a Label', () => {
    expect(tree.props.children[0].type).toEqual(Label)
  })

  it('should have an input element', () => {
    expect(input.type).toEqual(Base)
  })

  it('should set tagName input', () => {
    expect(input.props.tagName).toEqual('input')
  })

  it('should not have a message', () => {
    expect(message).toNotExist()
  })

  it('should not set color', () => {
    expect(tree.props.baseStyle.color).toNotExist()
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
      expect(tree.props.className).toEqual('Input isInvalid')
    })

    it('should change the color', () => {
      expect(tree.props.baseStyle.color).toEqual(colors.error)
    })
  })

  context('when disabled is set', () => {
    beforeEach(() => {
      renderer.render(<Input disabled name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Input isDisabled')
    })
  })

  context('when readOnly is set', () => {
    beforeEach(() => {
      renderer.render(<Input readOnly name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Input isReadonly')
    })
  })

  context('when form props are set', () => {
    beforeEach(() => {
      renderer.render(
        <Input
          name='test'
          label='Test'
          value={'Hello'}
          onChange={function () {}} />
      )
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })

    it('should pass props to input', () => {
      expect(input.props.onChange).toBeA('function')
      expect(input.props.value).toEqual('Hello')
    })
  })

  context('when Rebass props are set', () => {
    beforeEach(() => {
      renderer.render(
        <Input
          name='test'
          label='Test'
          rounded='left'
          backgroundColor='blue'
          theme='primary'
          inverted />
      )
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })

    it('should not pass props to root', () => {
      expect(tree.props.rounded).toNotExist()
      expect(tree.props.backgroundColor).toNotExist()
      expect(tree.props.theme).toNotExist()
      expect(tree.props.inverted).toNotExist()
    })

    it('should pass props to input', () => {
      expect(input.props.rounded).toEqual('left')
      expect(input.props.backgroundColor).toEqual('blue')
      expect(input.props.theme).toEqual('primary')
      expect(input.props.inverted).toEqual(true)
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

  describe('events', () => {
    jsdom()

    context('when change event is fired', () => {
      const spy = expect.createSpy()
      const render = TestUtils.renderIntoDocument
      class Root extends React.Component { render () { return this.props.children } }
      let node

      before(() => {
        tree = render(
          <Root>
            <Input
              name='test'
              label='Test'
              onChange={spy} />
          </Root>
        )
        node = TestUtils.findRenderedDOMComponentWithTag(tree, 'input')
        TestUtils.Simulate.change(node)
      })

      it('should call onChange once', () => {
        expect(spy.calls.length).toEqual(1)
      })
    })
  })
})

