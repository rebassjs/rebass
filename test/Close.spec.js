
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Close } from '../src'

const renderer = TestUtils.createRenderer()

describe('Close', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Close />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('button')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Close')
  })

  it('should have title', () => {
    expect(tree.props.title).toEqual('Close')
  })

  it('should contain an ×', () => {
    console.log(tree.props.children)
    expect(tree.props.children).toEqual('×')
  })
})

