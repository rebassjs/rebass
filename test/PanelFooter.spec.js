
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { config, PanelFooter, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('PanelFooter', () => {
  const { colors } = config
  let tree

  beforeEach(() => {
    renderer.render(<PanelFooter />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('PanelFooter')
  })

  it('should have default border color', () => {
    expect(tree.props.baseStyle.borderColor).toEqual(colors.default)
  })

  context('when theme is default', () => {
    beforeEach(() => {
      renderer.render(<PanelFooter theme='default' />)
      tree = renderer.getRenderOutput()
    })
    it('should have default border color', () => {
      expect(tree.props.baseStyle.borderColor).toEqual(colors.default)
    })
  })

  context('when theme is info', () => {
    beforeEach(() => {
      renderer.render(<PanelFooter theme='info' />)
      tree = renderer.getRenderOutput()
    })
    it('should have info border color', () => {
      expect(tree.props.baseStyle.borderColor).toEqual(colors.info)
    })
  })

  context('when theme is success', () => {
    beforeEach(() => {
      renderer.render(<PanelFooter theme='success' />)
      tree = renderer.getRenderOutput()
    })
    it('should have success border color', () => {
      expect(tree.props.baseStyle.borderColor).toEqual(colors.success)
    })
  })

  context('when theme is warning', () => {
    beforeEach(() => {
      renderer.render(<PanelFooter theme='warning' />)
      tree = renderer.getRenderOutput()
    })
    it('should have warning border color', () => {
      expect(tree.props.baseStyle.borderColor).toEqual(colors.warning)
    })
  })

  context('when theme is error', () => {
    beforeEach(() => {
      renderer.render(<PanelFooter theme='error' />)
      tree = renderer.getRenderOutput()
    })
    it('should have error border color', () => {
      expect(tree.props.baseStyle.borderColor).toEqual(colors.error)
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

