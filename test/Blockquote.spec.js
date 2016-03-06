
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Blockquote, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Blockquote', () => {
  let tree, link

  beforeEach(() => {
    renderer.render(<Blockquote />)
    tree = renderer.getRenderOutput()
    link = tree.props.children[1].props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName p', () => {
    expect(tree.props.tagName).toEqual('blockquote')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Blockquote')
  })

  it('should have a source link', () => {
    expect(link.type).toEqual('a')
  })

  context('when source and href are set', () => {
    beforeEach(() => {
      renderer.render(<Blockquote href='#hello' source='Hello' />)
      tree = renderer.getRenderOutput()
      link = tree.props.children[1].props.children[1]
    })
    it('should pass href and children to link', () => {
      expect(link.props.href).toEqual('#hello')
      expect(link.props.children).toEqual('Hello')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Blockquote style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

