
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Tooltip, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Tooltip', () => {
  let tree, tooltip

  beforeEach(() => {
    renderer.render(<Tooltip />)
    tree = renderer.getRenderOutput()
    tooltip = tree.props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual('span')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Tooltip')
  })

  it('should have a Base component', () => {
    expect(tooltip.type).toEqual(Base)
  })

  it('should have a className on the tooltip', () => {
    expect(tooltip.props.className).toMatch(/^Tooltip/)
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Tooltip style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should not set styles on root component', () => {
      expect(tree.props.style.color).toNotExist()
    })
  })
})

