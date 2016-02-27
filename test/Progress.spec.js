
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Progress } from '../src'

const renderer = TestUtils.createRenderer()

describe('Progress', () => {
  let tree, progress

  beforeEach(() => {
    renderer.render(<Progress />)
    tree = renderer.getRenderOutput()
    progress = tree.props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Progress')
  })

  it('should have a progress element', () => {
    expect(progress.type).toEqual('progress')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Progress style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
      progress = tree.props.children[1]
    })

    it('should have a custom color', () => {
      expect(progress.props.style.color).toEqual('tomato')
    })
  })
})

