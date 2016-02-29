
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Badge } from '../src'

const renderer = TestUtils.createRenderer()

describe('Badge', () => {
  const { colors } = theme
  let tree

  beforeEach(() => {
    renderer.render(<Badge />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Badge')
  })

  it('should have a default background color', () => {
    expect(tree.props.style.backgroundColor).toEqual(colors.default)
  })

  context('when type is info', () => {
    beforeEach(() => {
      renderer.render(<Badge type='info' />)
      tree = renderer.getRenderOutput()
    })

    it('should have the info background color', () => {
      expect(tree.props.style.backgroundColor).toEqual(colors.info)
    })
  })

  context('when type is success', () => {
    beforeEach(() => {
      renderer.render(<Badge type='success' />)
      tree = renderer.getRenderOutput()
    })

    it('should have the success background color', () => {
      expect(tree.props.style.backgroundColor).toEqual(colors.success)
    })
  })

  context('when type is warning', () => {
    beforeEach(() => {
      renderer.render(<Badge type='warning' />)
      tree = renderer.getRenderOutput()
    })

    it('should have the warning background color', () => {
      expect(tree.props.style.backgroundColor).toEqual(colors.warning)
    })
  })

  context('when type is error', () => {
    beforeEach(() => {
      renderer.render(<Badge type='error' />)
      tree = renderer.getRenderOutput()
    })

    it('should have the error background color', () => {
      expect(tree.props.style.backgroundColor).toEqual(colors.error)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Badge style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

