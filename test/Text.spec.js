
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { config, Text, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Text', () => {
  const { fontSizes, bold } = config
  let tree

  beforeEach(() => {
    renderer.render(<Text />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName p', () => {
    expect(tree.props.tagName).toEqual('p')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Text')
  })

  it('should have default font size', () => {
    expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[4])
  })

  context('when small is true', () => {
    beforeEach(() => {
      renderer.render(<Text small />)
      tree = renderer.getRenderOutput()
    })
    it('should have small font size', () => {
      expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[6])
    })
  })

  context('when bold is true', () => {
    beforeEach(() => {
      renderer.render(<Text bold />)
      tree = renderer.getRenderOutput()
    })
    it('should have bold font weight', () => {
      expect(tree.props.baseStyle.fontWeight).toEqual(bold)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Text style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

