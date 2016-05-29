
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import jsdom from 'mocha-jsdom'
import { Slider, Label, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Slider', () => {
  let tree, input, label

  beforeEach(() => {
    renderer.render(<Slider name='test' label='Test' />)
    tree = renderer.getRenderOutput()
    label = tree.props.children[1]
    input = tree.props.children[2]
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Slider')
  })

  it('should have a style tag', () => {
    expect(tree.props.children[0].type).toEqual('style')
  })

  it('should have a Label', () => {
    expect(label.type).toEqual(Label)
  })

  it('should have an input element', () => {
    expect(input.type).toEqual('input')
  })

  it('should have a range type', () => {
    expect(input.props.type).toEqual('range')
  })

  it('should not have a background gradient', () => {
    expect(input.props.style.backgroundImage).toNotExist()
  })

  context('when hideLabel is set', () => {
    beforeEach(() => {
      renderer.render(<Slider hideLabel name='test' label='Test' />)
      tree = renderer.getRenderOutput()
      label = tree.props.children[1]
    })

    it('should have a label', () => {
      expect(label).toExist()
    })

    it('should set the hide prop', () => {
      expect(label.props.hide).toEqual(true)
    })
  })

  context('when fill is true', () => {
    beforeEach(() => {
      renderer.render(<Slider fill value={25} name='test' label='Test' />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[2]
    })

    it('should have a background gradient', () => {
      expect(input.props.style.backgroundImage).toMatch(/^linear\-gradient/)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(
        <Slider
          name='test'
          label='Test'
          style={{ color: 'tomato' }} />
      )
      tree = renderer.getRenderOutput()
      input = tree.props.children[2]
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
            <Slider
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

