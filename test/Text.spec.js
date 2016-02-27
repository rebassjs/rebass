
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Text } from '../src'

const renderer = TestUtils.createRenderer()

describe('Text', () => {
  const { fontSizes } = theme
  let tree

  beforeEach(() => {
    renderer.render(<Text />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('p')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Text')
  })

  it('should have default font size', () => {
    expect(tree.props.style.fontSize).toEqual(fontSizes[4])
  })

  context('when small is true', () => {
    beforeEach(() => {
      renderer.render(<Text small />)
      tree = renderer.getRenderOutput()
    })
    it('should have small font size', () => {
      expect(tree.props.style.fontSize).toEqual(fontSizes[6])
    })
  })

})

