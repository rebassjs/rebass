
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Panel, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Panel', () => {
  const { colors } = theme
  let tree

  beforeEach(() => {
    renderer.render(<Panel />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Panel')
  })

  it('should have default border color', () => {
    expect(tree.props.baseStyle.borderColor).toEqual(colors.default)
  })

  context('when type is default', () => {
    beforeEach(() => {
      renderer.render(<Panel type='default' />)
      tree = renderer.getRenderOutput()
    })
    it('should have default border color', () => {
      expect(tree.props.baseStyle.borderColor).toEqual(colors.default)
    })
  })

  context('when type is info', () => {
    beforeEach(() => {
      renderer.render(<Panel type='info' />)
      tree = renderer.getRenderOutput()
    })
    it('should have info border color', () => {
      expect(tree.props.baseStyle.borderColor).toEqual(colors.info)
    })
  })

  context('when type is success', () => {
    beforeEach(() => {
      renderer.render(<Panel type='success' />)
      tree = renderer.getRenderOutput()
    })
    it('should have success border color', () => {
      expect(tree.props.baseStyle.borderColor).toEqual(colors.success)
    })
  })

  context('when type is warning', () => {
    beforeEach(() => {
      renderer.render(<Panel type='warning' />)
      tree = renderer.getRenderOutput()
    })
    it('should have warning border color', () => {
      expect(tree.props.baseStyle.borderColor).toEqual(colors.warning)
    })
  })

  context('when type is error', () => {
    beforeEach(() => {
      renderer.render(<Panel type='error' />)
      tree = renderer.getRenderOutput()
    })
    it('should have error border color', () => {
      expect(tree.props.baseStyle.borderColor).toEqual(colors.error)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Panel style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

