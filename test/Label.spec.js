
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Label } from '../src'

const renderer = TestUtils.createRenderer()

describe('Label', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Label />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('label')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Label')
  })

  it('should not have accessible hide styles', () => {
    expect(tree.props.style.position).toNotExist()
    expect(tree.props.style.height).toNotExist()
    expect(tree.props.style.width).toNotExist()
    expect(tree.props.style.overflow).toNotExist()
    expect(tree.props.style.clip).toNotExist()
  })

  context('when hide is true', () => {
    beforeEach(() => {
      renderer.render(<Label hide />)
      tree = renderer.getRenderOutput()
    })
    it('should have accessible hide styles', () => {
      expect(tree.props.style.position).toEqual('absolute')
      expect(tree.props.style.height).toEqual(1)
      expect(tree.props.style.width).toEqual(1)
      expect(tree.props.style.overflow).toEqual('hidden')
      expect(tree.props.style.clip).toEqual('rect(1px, 1px, 1px, 1px)')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Label style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

