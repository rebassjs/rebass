
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Donut, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Donut', () => {
  let tree, svg, children, percentage

  beforeEach(() => {
    renderer.render(<Donut />)
    tree = renderer.getRenderOutput()
    svg = tree.props.children[0]
    children = tree.props.children[1]
    percentage = tree.props.children[2]
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Donut')
  })

  it('should have an svg', () => {
    expect(svg.type).toEqual('svg')
  })

  it('should have a background path', () => {
    expect(svg.props.children[0]).toExist()
    expect(svg.props.children[0].props.d).toMatch(/\s8$/)
  })

  it('should not have children', () => {
    expect(children).toNotExist()
  })

  it('should show 0%', () => {
    expect(percentage.props.children[0]).toEqual('0')
  })

  it('should have a default size', () => {
    expect(tree.props.baseStyle.width).toEqual(128)
    expect(tree.props.baseStyle.height).toEqual(128)
  })

  it('should have a default font size', () => {
    expect(tree.props.baseStyle.fontSize).toEqual(128 / 4)
  })

  context('when value is set', () => {
    beforeEach(() => {
      renderer.render(<Donut value={1 / 4} />)
      tree = renderer.getRenderOutput()
      children = tree.props.children[1]
      percentage = tree.props.children[2]
    })
    it('should not have children', () => {
      expect(children).toNotExist()
    })
    it('should show a percentage', () => {
      expect(percentage.props.children[0]).toEqual('25')
    })
  })

  context('when size is set', () => {
    beforeEach(() => {
      renderer.render(<Donut value={1 / 4} size={256} />)
      tree = renderer.getRenderOutput()
      children = tree.props.children[1]
      percentage = tree.props.children[2]
    })
    it('should change the width and height', () => {
      expect(tree.props.baseStyle.width).toEqual(256)
      expect(tree.props.baseStyle.height).toEqual(256)
    })
    it('should change the font size', () => {
      expect(tree.props.baseStyle.fontSize).toEqual(256 / 4)
    })
  })

  context('when strokeWidth is set', () => {
    beforeEach(() => {
      renderer.render(<Donut value={1 / 4} strokeWidth={16} />)
      tree = renderer.getRenderOutput()
      svg = tree.props.children[0]
    })
    it('should change the strokeWidth', () => {
      expect(svg.props.children[0].props.d).toMatch(/\s16$/)
    })
  })

  context('when children are passed in', () => {
    beforeEach(() => {
      renderer.render(<Donut value={1 / 4} children='1/4' />)
      tree = renderer.getRenderOutput()
      children = tree.props.children[1]
      percentage = tree.props.children[2]
    })
    it('should have children', () => {
      expect(children).toEqual('1/4')
    })
    it('should not have the percentage', () => {
      expect(percentage).toNotExist()
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Donut style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

