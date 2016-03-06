
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Divider, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Divider', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Divider />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName', () => {
    expect(tree.props.tagName).toEqual('hr')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Divider')
  })

  context('when setting width', () => {
    beforeEach(() => {
      renderer.render(<Divider width={256} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a fixed width', () => {
      expect(tree.props.baseStyle.width).toEqual(256)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Divider style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

