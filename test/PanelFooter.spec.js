
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, PanelFooter } from '../src'

const renderer = TestUtils.createRenderer()

describe('PanelFooter', () => {
  const { colors } = theme
  let tree

  beforeEach(() => {
    renderer.render(<PanelFooter />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('PanelFooter')
  })

  it('should have default border color', () => {
    expect(tree.props.style.borderTopColor).toEqual(colors.default)
  })

  context('when type is default', () => {
    beforeEach(() => {
      renderer.render(<PanelFooter type='default' />)
      tree = renderer.getRenderOutput()
    })
    it('should have default border color', () => {
      expect(tree.props.style.borderTopColor).toEqual(colors.default)
    })
  })

  context('when type is info', () => {
    beforeEach(() => {
      renderer.render(<PanelFooter type='info' />)
      tree = renderer.getRenderOutput()
    })
    it('should have info border color', () => {
      expect(tree.props.style.borderTopColor).toEqual(colors.info)
    })
  })

  context('when type is success', () => {
    beforeEach(() => {
      renderer.render(<PanelFooter type='success' />)
      tree = renderer.getRenderOutput()
    })
    it('should have success border color', () => {
      expect(tree.props.style.borderTopColor).toEqual(colors.success)
    })
  })

  context('when type is warning', () => {
    beforeEach(() => {
      renderer.render(<PanelFooter type='warning' />)
      tree = renderer.getRenderOutput()
    })
    it('should have warning border color', () => {
      expect(tree.props.style.borderTopColor).toEqual(colors.warning)
    })
  })

  context('when type is error', () => {
    beforeEach(() => {
      renderer.render(<PanelFooter type='error' />)
      tree = renderer.getRenderOutput()
    })
    it('should have error border color', () => {
      expect(tree.props.style.borderTopColor).toEqual(colors.error)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<PanelFooter style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

