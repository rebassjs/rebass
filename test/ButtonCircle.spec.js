
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, ButtonCircle } from '../src'

const renderer = TestUtils.createRenderer()

describe('ButtonCircle', () => {
  const { scale, colors, borderRadius } = theme
  let tree

  beforeEach(() => {
    renderer.render(<ButtonCircle />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('button')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('ButtonCircle')
  })

  it('should have a primary background color', () => {
    expect(tree.props.style.backgroundColor).toEqual(colors.primary)
  })

  it('should have a border radius', () => {
    expect(tree.props.style.borderRadius).toEqual(99999)
  })

  context('when size prop is set', () => {
    beforeEach(() => {
      renderer.render(<ButtonCircle size={64} />)
      tree = renderer.getRenderOutput()
    })
    it('should set width and height', () => {
      expect(tree.props.style.width).toEqual(64)
      expect(tree.props.style.height).toEqual(64)
    })
  })

  context('when href is set', () => {
    beforeEach(() => {
      renderer.render(<ButtonCircle href='#!' />)
      tree = renderer.getRenderOutput()
    })
    it('should be an <a> tag', () => {
      expect(tree.type).toEqual('a')
    })
  })

  context('when a color from the colors object is set', () => {
    beforeEach(() => {
      renderer.render(<ButtonCircle color='red' />)
      tree = renderer.getRenderOutput()
    })
    it('should set a color from the theme', () => {
      expect(tree.props.style.color).toEqual(colors.red)
    })
  })

  context('when a generic color is set', () => {
    beforeEach(() => {
      renderer.render(<ButtonCircle color='#f00' />)
      tree = renderer.getRenderOutput()
    })
    it('should set the raw color value', () => {
      expect(tree.props.style.color).toEqual('#f00')
    })
  })

  context('when a background color from the colors object is set', () => {
    beforeEach(() => {
      renderer.render(<ButtonCircle backgroundColor='red' />)
      tree = renderer.getRenderOutput()
    })
    it('should set a background color from the theme', () => {
      expect(tree.props.style.backgroundColor).toEqual(colors.red)
    })
  })

  context('when a generic backgroundColor is set', () => {
    beforeEach(() => {
      renderer.render(<ButtonCircle backgroundColor='#f00' />)
      tree = renderer.getRenderOutput()
    })
    it('should set the raw background color', () => {
      expect(tree.props.style.backgroundColor).toEqual('#f00')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<ButtonCircle style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

