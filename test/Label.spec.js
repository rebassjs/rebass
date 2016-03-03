
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Label, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Label', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Label />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName', () => {
    expect(tree.props.tagName).toEqual('label')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Label')
  })

  it('should not have accessible hide styles', () => {
    expect(tree.props.baseStyle.position).toNotExist()
    expect(tree.props.baseStyle.height).toNotExist()
    expect(tree.props.baseStyle.width).toNotExist()
    expect(tree.props.baseStyle.overflow).toNotExist()
    expect(tree.props.baseStyle.clip).toNotExist()
  })

  context('when hide is true', () => {
    beforeEach(() => {
      renderer.render(<Label hide />)
      tree = renderer.getRenderOutput()
    })
    it('should have accessible hide styles', () => {
      expect(tree.props.baseStyle.position).toEqual('absolute')
      expect(tree.props.baseStyle.height).toEqual(1)
      expect(tree.props.baseStyle.width).toEqual(1)
      expect(tree.props.baseStyle.overflow).toEqual('hidden')
      expect(tree.props.baseStyle.clip).toEqual('rect(1px, 1px, 1px, 1px)')
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

