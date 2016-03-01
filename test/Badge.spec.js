
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Badge } from '../src'

const renderer = TestUtils.createRenderer()

describe('Badge', () => {
  const { scale, colors, borderRadius } = theme
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

  it('should have a default border radius', () => {
    expect(tree.props.style.borderRadius).toEqual(borderRadius)
  })

  it('should have default padding', () => {
    expect(tree.props.style.paddingLeft).toEqual(scale[1])
    expect(tree.props.style.paddingRight).toEqual(scale[1])
  })

  it('should not have a set width', () => {
    expect(tree.props.style.width).toNotExist()
  })

  context('when pill is set', () => {
    beforeEach(() => {
      renderer.render(<Badge pill />)
      tree = renderer.getRenderOutput()
    })

    it('should have full border radius', () => {
      expect(tree.props.style.borderRadius).toEqual(99999)
    })

    it('should have padding', () => {
      expect(tree.props.style.paddingLeft).toEqual(scale[1])
      expect(tree.props.style.paddingRight).toEqual(scale[1])
    })

    it('should not have a set width', () => {
      expect(tree.props.style.width).toNotExist()
    })
  })

  context('when circle is set', () => {
    beforeEach(() => {
      renderer.render(<Badge circle />)
      tree = renderer.getRenderOutput()
    })

    it('should have full border radius', () => {
      expect(tree.props.style.borderRadius).toEqual(99999)
    })

    it('should have padding', () => {
      expect(tree.props.style.paddingLeft).toEqual(0)
      expect(tree.props.style.paddingRight).toEqual(0)
    })

    it('should have a set width', () => {
      expect(tree.props.style.width).toEqual(scale[2])
    })
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

