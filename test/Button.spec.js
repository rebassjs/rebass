
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Button, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Button', () => {
  const { scale, colors, borderRadius } = theme
  let tree

  context('defaults', () => {
    beforeEach(() => {
      renderer.render(<Button />)
      tree = renderer.getRenderOutput()
    })

    it('should render', () => {
      expect(tree.type).toEqual(Base)
    })

    it('should set tagName', () => {
      expect(tree.props.tagName).toEqual('button')
    })

    it('should have a className', () => {
      expect(tree.props.className).toEqual('Button')
    })

    it('should have a default color prop', () => {
      expect(tree.props.color).toEqual('white')
    })

    it('should have a default backgroundColor prop', () => {
      expect(tree.props.backgroundColor).toEqual('primary')
    })

    it('should have a rounded prop', () => {
      expect(tree.props.rounded).toEqual(true)
    })

    it('should have default padding', () => {
      expect(tree.props.baseStyle.padding).toEqual(`${scale[1]}px ${scale[2]}px`)
    })
  })

  context('when big prop is true', () => {
    beforeEach(() => {
      renderer.render(<Button big />)
      tree = renderer.getRenderOutput()
    })
    it('should have more padding', () => {
      expect(tree.props.baseStyle.padding).toEqual(scale[2])
    })
  })

  context('when href is set', () => {
    beforeEach(() => {
      renderer.render(<Button href='#!' />)
      tree = renderer.getRenderOutput()
    })
    it('should set tagName', () => {
      expect(tree.props.tagName).toEqual('a')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Button style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

