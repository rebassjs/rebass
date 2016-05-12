
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Slider, Label, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Slider', () => {
  let tree, input, label, style

  beforeEach(() => {
    renderer.render(<Slider name='test' label='Test' />)
    tree = renderer.getRenderOutput()
    style = tree.props.children[0]
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
    expect(style.type).toEqual('style')
  })

  it('should have a slider thumb default height & width', () => {
    expect(style.props.dangerouslySetInnerHTML.__html).toInclude('width: 24px;')
    expect(style.props.dangerouslySetInnerHTML.__html).toInclude('height: 24px;')
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

  context('when thumbSize is set', () => {
    beforeEach(() => {
      renderer.render(<Slider thumbSize={10} />)
      tree = renderer.getRenderOutput()
      style = tree.props.children[0]
    })

    it('should have a style tag', () => {
      expect(style.type).toEqual('style')
    })

    it('should set the slider height & width correctly', () => {
      expect(style.props.dangerouslySetInnerHTML.__html).toInclude('width: 10px;')
      expect(style.props.dangerouslySetInnerHTML.__html).toInclude('height: 10px;')
    })
  })
})

