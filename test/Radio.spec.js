
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import jsdom from 'mocha-jsdom'
import { config, Label, Radio, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Radio', () => {
  const { colors } = config
  let tree, input

  beforeEach(() => {
    renderer.render(<Radio name='test' label='Radio' />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName Label', () => {
    expect(tree.props.tagName).toEqual(Label)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Radio')
  })

  it('should have an input', () => {
    expect(tree.props.children[0].type).toEqual('input')
    expect(tree.props.children[0].props.type).toEqual('radio')
  })

  it('should not set a color', () => {
    expect(tree.props.baseStyle.color).toNotExist()
  })

  context('when aria-invalid is set', () => {
    beforeEach(() => {
      renderer.render(<Radio aria-invalid name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Radio isInvalid')
    })

    it('should change the color', () => {
      expect(tree.props.baseStyle.color).toEqual(colors.error)
    })
  })

  context('when disabled is set', () => {
    beforeEach(() => {
      renderer.render(<Radio disabled name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Radio isDisabled')
    })
  })

  context('when readOnly is set', () => {
    beforeEach(() => {
      renderer.render(<Radio readOnly name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Radio isReadonly')
    })
  })

  context('when form props are set', () => {
    beforeEach(() => {
      renderer.render(
        <Radio
          name='test'
          label='Test'
          checked
          value={'Hello'}
          onChange={function () {}} />
      )
      tree = renderer.getRenderOutput()
      input = tree.props.children[0]
    })

    it('should pass props to input', () => {
      expect(input.props.checked).toEqual(true)
      expect(input.props.onChange).toBeA('function')
      expect(input.props.value).toEqual('Hello')
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
            <Radio
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

