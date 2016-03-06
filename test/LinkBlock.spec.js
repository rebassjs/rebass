
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { LinkBlock, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('LinkBlock', () => {
  let tree

  beforeEach(() => {
    renderer.render(<LinkBlock />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName', () => {
    expect(tree.props.tagName).toEqual('a')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('LinkBlock')
  })

  context('when Component is set', () => {
    beforeEach(() => {
      renderer.render(<LinkBlock Component='button' />)
      tree = renderer.getRenderOutput()
    })
    it('should set tagName button', () => {
      expect(tree.props.tagName).toEqual('button')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<LinkBlock style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

