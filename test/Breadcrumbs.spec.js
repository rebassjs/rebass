
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Breadcrumbs } from '../src'

const renderer = TestUtils.createRenderer()

describe('Breadcrumbs', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Breadcrumbs />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Breadcrumbs')
  })

  it('should not have children', () => {
    expect(tree.props.children).toEqual([])
  })

  context('when one link is set', () => {
    beforeEach(() => {
      renderer.render(<Breadcrumbs links={[ { href: '#!', children: 'Link' } ]} />)
      tree = renderer.getRenderOutput()
    })

    it('should have one link', () => {
      expect(tree.props.children.length).toEqual(1)
      expect(tree.props.children[0].props.children[0].type).toEqual('a')
    })

    it('should not have a separator', () => {
      const div = tree.props.children[0]
      expect(div.props.children[1]).toEqual(false)
    })
  })

  context('when multiple links are set', () => {
    beforeEach(() => {
      renderer.render(
        <Breadcrumbs
          links={[
            { href: '#!', children: 'Link One' },
            { href: '#!', children: 'Link Two' },
            { href: '#!', children: 'Link Three' }
          ]} />
      )
      tree = renderer.getRenderOutput()
    })

    it('should have three links', () => {
      expect(tree.props.children.length).toEqual(3)
    })

    it('should have a separator between links', () => {
      const div = tree.props.children[0]
      expect(div.props.children.length).toEqual(2)
      expect(div.props.children[1].type).toEqual('span')
    })
  })

})

