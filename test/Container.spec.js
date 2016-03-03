
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Container, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Container', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Container />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Container')
  })

  it('should have a max width', () => {
    expect(tree.props.baseStyle.maxWidth).toEqual(1024)
  })

  it('should have margin auto', () => {
    expect(tree.props.baseStyle.margin).toEqual('auto')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Container style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

