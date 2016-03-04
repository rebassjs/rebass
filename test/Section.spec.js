
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Section, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Section', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Section />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName section', () => {
    expect(tree.props.tagName).toEqual('section')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Section')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Section style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

