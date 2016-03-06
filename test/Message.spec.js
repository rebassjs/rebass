
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Message, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Message', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Message />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Message')
  })

  it('should have default theme', () => {
    expect(tree.props.theme).toEqual('default')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Message style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

