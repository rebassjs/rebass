
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, LinkBlock } from '../src'

const renderer = TestUtils.createRenderer()

describe('LinkBlock', () => {
  const { fontSizes } = theme
  let tree

  beforeEach(() => {
    renderer.render(<LinkBlock />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('a')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('LinkBlock')
  })

  context('when Component is set', () => {
    beforeEach(() => {
      renderer.render(<LinkBlock Component='button' />)
      tree = renderer.getRenderOutput()
    })
    it('should have a button root element', () => {
      expect(tree.type).toEqual('button')
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

