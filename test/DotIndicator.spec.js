
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { DotIndicator, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('DotIndicator', () => {
  let tree, dots

  beforeEach(() => {
    renderer.render(<DotIndicator />)
    tree = renderer.getRenderOutput()
    dots = tree.props.children
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('DotIndicator')
  })

  it('should have no dots by default', () => {
    expect(dots.length).toEqual(0)
  })

  context('when length is set', () => {
    beforeEach(() => {
      renderer.render(<DotIndicator length={3} />)
      tree = renderer.getRenderOutput()
      dots = tree.props.children
    })
    it('should have three dots', () => {
      expect(dots.length).toEqual(3)
    })
    it('should not have active dots', () => {
      expect(dots[0].props.style.opacity).toEqual(0.375)
      expect(dots[1].props.style.opacity).toEqual(0.375)
      expect(dots[2].props.style.opacity).toEqual(0.375)
    })
  })

  context('when active is set', () => {
    beforeEach(() => {
      renderer.render(<DotIndicator length={3} active={2} />)
      tree = renderer.getRenderOutput()
      dots = tree.props.children
    })

    it('should change opacity on the last dot', () => {
      expect(dots[2].props.style.opacity).toEqual(0.875)
    })

    it('should not change opacity on the other dots', () => {
      expect(dots[0].props.style.opacity).toEqual(0.375)
      expect(dots[1].props.style.opacity).toEqual(0.375)
    })
  })

  /* Look into if TestUtils.Simulate works in shallow rendering
  context('when clicking a dot', () => {
    beforeEach(() => {
      renderer.render(
        <DotIndicator
          onClick={function(i) { console.log('click', i) }}
          length={3}
          active={2} />
      )
      tree = renderer.getRenderOutput()
      dots = tree.props.children
    })

    it('should fire the onChange callback')
    it('should pass the index to the callback')
  })
  */

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(
        <DotIndicator
          length={1}
          style={{ color: 'tomato' }} />
      )
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

