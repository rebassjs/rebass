
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import jsdom from 'mocha-jsdom'
import { Select, Label, Base, config } from '../src'

const renderer = TestUtils.createRenderer()

describe('Select', () => {
  const { colors } = config
  let tree, select, message

  beforeEach(() => {
    renderer.render(<Select name='test_select' label='Test' />)
    tree = renderer.getRenderOutput()
    select = tree.props.children[1].props.children[0]
    message = tree.props.children[2]
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Select')
  })

  it('should have a Label', () => {
    expect(tree.props.children[0].type).toEqual(Label)
  })

  it('should have a Base component for select element', () => {
    expect(select.type).toEqual(Base)
  })

  it('should have tagName select', () => {
    expect(select.props.tagName).toEqual('select')
  })

  it('should not have a message', () => {
    expect(message).toNotExist()
  })

  it('should not set a color', () => {
    expect(tree.props.baseStyle.color).toNotExist()
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
      select = tree.props.children[1].props.children[0]
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
      expect(tree.props.className).toEqual('Select isInvalid')
    })

    it('should change the color', () => {
      expect(tree.props.baseStyle.color).toEqual(colors.error)
    })
  })

  context('when disabled is set', () => {
    beforeEach(() => {
      renderer.render(<Select disabled name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Select isDisabled')
    })
  })

  context('when readOnly is set', () => {
    beforeEach(() => {
      renderer.render(<Select readOnly name='test' label='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a className', () => {
      expect(tree.props.className).toEqual('Select isReadonly')
    })
  })

  context('when Rebass props are set', () => {
    beforeEach(() => {
      renderer.render(
        <Select
          name='test'
          label='Test'
          rounded='left'
          backgroundColor='blue'
          theme='primary'
          inverted
          />
      )
      tree = renderer.getRenderOutput()
      select = tree.props.children[1].props.children[0]
    })

    it('should not pass props to root', () => {
      expect(tree.props.rounded).toNotExist()
      expect(tree.props.backgroundColor).toNotExist()
      expect(tree.props.theme).toNotExist()
      expect(tree.props.inverted).toNotExist()
    })

    it('should pass props to select', () => {
      expect(select.props.rounded).toEqual('left')
      expect(select.props.backgroundColor).toEqual('blue')
      expect(select.props.theme).toEqual('primary')
      expect(select.props.inverted).toEqual(true)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Select name='test_select' label='Test' style={{ color: 'tomato' }} />)
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
            <Select
              name='test'
              label='Test'
              onChange={spy} />
          </Root>
        )
        node = TestUtils.findRenderedDOMComponentWithTag(tree, 'select')
        TestUtils.Simulate.change(node)
      })

      it('should call onChange once', () => {
        expect(spy.calls.length).toEqual(1)
      })
    })
  })
})

