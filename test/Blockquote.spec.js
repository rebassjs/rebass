
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Blockquote, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Blockquote', () => {
  let tree, prefix, link

  beforeEach(() => {
    renderer.render(<Blockquote />)
    tree = renderer.getRenderOutput()
    prefix = tree.props.children[0]
    link = tree.props.children[1].props.children[1].props.children[1]
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

  it('should have a prefix', () => {
    expect(prefix.type).toEqual('div')
  })

  it('should have a source link', () => {
    expect(link.type).toEqual('a')
  })

  context('when prefix is false', () => {
    beforeEach(() => {
      renderer.render(<Blockquote prefix={false} />)
      tree = renderer.getRenderOutput()
      prefix = tree.props.children[0]
    })
    it('should not have a prefix', () => {
      expect(prefix).toEqual(false)
    })
  })

  context('when prefix is a string', () => {
    beforeEach(() => {
      renderer.render(<Blockquote prefix='»' />)
      tree = renderer.getRenderOutput()
      prefix = tree.props.children[0]
    })
    it('should render the string', () => {
      expect(prefix.props.children).toEqual('»')
    })
  })

  context('when source and href are set', () => {
    beforeEach(() => {
      renderer.render(<Blockquote href='#hello' source='Hello' />)
      tree = renderer.getRenderOutput()
      link = tree.props.children[1].props.children[1].props.children[1]
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

