
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import jsdom from 'mocha-jsdom'
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
    expect(textarea.type).toEqual(Base)
  })

  it('should set tagName textarea', () => {
    expect(textarea.props.tagName).toEqual('textarea')
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
      expect(tree.props.className).toEqual('Textarea isInvalid')
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
      expect(tree.props.className).toEqual('Textarea isDisabled')
    })
  })

  context('when readOnly is set', () => {
    beforeEach(() => {
      renderer.render(<Textarea readOnly name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Textarea isReadonly')
    })
  })

  context('when form props are set', () => {
    beforeEach(() => {
      renderer.render(
        <Textarea
          name='test'
          label='Test'
          value={'Hello'}
          onChange={function () {}} />
      )
      tree = renderer.getRenderOutput()
      textarea = tree.props.children[1]
    })

    it('should pass props to textarea', () => {
      expect(textarea.props.onChange).toBeA('function')
      expect(textarea.props.value).toEqual('Hello')
    })
  })

  context('when Rebass props are set', () => {
    beforeEach(() => {
      renderer.render(
        <Textarea
          name='test'
          label='Test'
          rounded='left'
          backgroundColor='blue'
          theme='primary'
          inverted />
      )
      tree = renderer.getRenderOutput()
      textarea = tree.props.children[1]
    })

    it('should not pass props to root', () => {
      expect(tree.props.rounded).toNotExist()
      expect(tree.props.backgroundColor).toNotExist()
      expect(tree.props.theme).toNotExist()
      expect(tree.props.inverted).toNotExist()
    })

    it('should pass props to textarea', () => {
      expect(textarea.props.rounded).toEqual('left')
      expect(textarea.props.backgroundColor).toEqual('blue')
      expect(textarea.props.theme).toEqual('primary')
      expect(textarea.props.inverted).toEqual(true)
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
            <Textarea
              name='test'
              label='Test'
              onChange={spy} />
          </Root>
        )
        node = TestUtils.findRenderedDOMComponentWithTag(tree, 'textarea')
        TestUtils.Simulate.change(node)
      })

      it('should call onChange once', () => {
        expect(spy.calls.length).toEqual(1)
      })
    })
  })
})

