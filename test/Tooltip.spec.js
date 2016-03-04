
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Tooltip, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Tooltip', () => {
  const { fontSizes } = theme
  let tree

  beforeEach(() => {
    renderer.render(<Tooltip />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName span', () => {
    expect(tree.props.tagName).toEqual('span')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Tooltip')
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

