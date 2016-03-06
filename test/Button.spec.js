
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { config, Button, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Button', () => {
  const { scale } = config
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
      expect(tree.props.baseStyle.paddingTop).toEqual(scale[1])
      expect(tree.props.baseStyle.paddingBottom).toEqual(scale[1])
    })
  })

  context('when big prop is true', () => {
    beforeEach(() => {
      renderer.render(<Button big />)
      tree = renderer.getRenderOutput()
    })
    it('should have more padding', () => {
      expect(tree.props.baseStyle.paddingTop).toEqual(scale[2])
      expect(tree.props.baseStyle.paddingBottom).toEqual(scale[2])
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

  context('when _className is set', () => {
    beforeEach(() => {
      renderer.render(<Button _className='Test' />)
      tree = renderer.getRenderOutput()
    })
    it('should set className', () => {
      expect(tree.props.className).toEqual('Test')
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

