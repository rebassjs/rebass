
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Footer, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Footer', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Footer />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName', () => {
    expect(tree.props.tagName).toEqual('footer')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Footer')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Footer style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

