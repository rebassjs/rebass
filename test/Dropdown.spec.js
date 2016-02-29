

import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Dropdown } from '../src'

const renderer = TestUtils.createRenderer()

describe('Dropdown', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Dropdown />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Dropdown')
  })

  it('should have position relative', () => {
    expect(tree.props.style.position).toEqual('relative')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Dropdown style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

