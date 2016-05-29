
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import jsdom from 'mocha-jsdom'
import { config, Label, Checkbox, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Checkbox', () => {
  const { colors } = config
  let tree, input

  beforeEach(() => {
    renderer.render(<Checkbox name='test' label='Checkbox' />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Checkbox')
  })

  it('should have a Label', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName Label', () => {
    expect(tree.props.tagName).toEqual(Label)
  })

  it('should have an input', () => {
    expect(tree.props.children[0].type).toEqual('input')
    expect(tree.props.children[0].props.type).toEqual('checkbox')
  })

  it('should not set a color', () => {
    expect(tree.props.baseStyle.color).toNotExist()
  })

  context('when aria-invalid is set', () => {
    beforeEach(() => {
      renderer.render(<Checkbox aria-invalid name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Checkbox isInvalid')
    })

    it('should change the color', () => {
      expect(tree.props.baseStyle.color).toEqual(colors.error)
    })
  })

  context('when disabled is set', () => {
    beforeEach(() => {
      renderer.render(<Checkbox disabled name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Checkbox isDisabled')
    })
  })

  context('when readOnly is set', () => {
    beforeEach(() => {
      renderer.render(<Checkbox readOnly name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Checkbox isReadonly')
    })
  })

  context('when form props are set', () => {
    beforeEach(() => {
      renderer.render(
        <Checkbox
          name='test'
          label='Test'
          checked
          onChange={function () {}} />
      )
      tree = renderer.getRenderOutput()
      input = tree.props.children[0]
    })

    it('should pass props to input', () => {
      expect(input.props.checked).toEqual(true)
      expect(input.props.onChange).toBeA('function')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Checkbox name='test_checkbox' label='Test' style={{ color: 'tomato' }} />)
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
            <Checkbox
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

