
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Message } from '../src'

const renderer = TestUtils.createRenderer()

describe('Message', () => {
  const { colors } = theme
  let tree

  beforeEach(() => {
    renderer.render(<Message />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Message')
  })

  it('should have default background color', () => {
    expect(tree.props.style.backgroundColor).toEqual(colors.default)
  })

  context('when type is default', () => {
    beforeEach(() => {
      renderer.render(<Message type='default' />)
      tree = renderer.getRenderOutput()
    })
    it('should have default background color', () => {
      expect(tree.props.style.backgroundColor).toEqual(colors.default)
    })
  })

  context('when type is info', () => {
    beforeEach(() => {
      renderer.render(<Message type='info' />)
      tree = renderer.getRenderOutput()
    })
    it('should have info background color', () => {
      expect(tree.props.style.backgroundColor).toEqual(colors.info)
    })
  })

  context('when type is success', () => {
    beforeEach(() => {
      renderer.render(<Message type='success' />)
      tree = renderer.getRenderOutput()
    })
    it('should have success background color', () => {
      expect(tree.props.style.backgroundColor).toEqual(colors.success)
    })
  })

  context('when type is warning', () => {
    beforeEach(() => {
      renderer.render(<Message type='warning' />)
      tree = renderer.getRenderOutput()
    })
    it('should have warning background color', () => {
      expect(tree.props.style.backgroundColor).toEqual(colors.warning)
    })
  })

  context('when type is error', () => {
    beforeEach(() => {
      renderer.render(<Message type='error' />)
      tree = renderer.getRenderOutput()
    })
    it('should have error background color', () => {
      expect(tree.props.style.backgroundColor).toEqual(colors.error)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Message style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

