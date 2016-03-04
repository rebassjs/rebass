
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Pre, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Pre', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Pre />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName pre', () => {
    expect(tree.props.tagName).toEqual('pre')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Pre')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Pre style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

