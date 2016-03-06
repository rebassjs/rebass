
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Rating, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Rating', () => {
  let tree, stars

  beforeEach(() => {
    renderer.render(<Rating />)
    tree = renderer.getRenderOutput()
    stars = tree.props.children
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Rating')
  })

  it('should have 5 stars', () => {
    expect(stars.length).toEqual(5)
  })

  it('should not have active stars', () => {
    expect(stars[0].props.children[1].props.style.display).toEqual('none')
  })

  it('should not set cursor pointer', () => {
    expect(stars[0].props.style.cursor).toNotExist()
  })

  context('when value is set', () => {
    beforeEach(() => {
      renderer.render(<Rating value={2} />)
      tree = renderer.getRenderOutput()
      stars = tree.props.children
    })

    it('should have two active stars', () => {
      expect(stars[0].props.children[1].props.style.display).toNotExist()
      expect(stars[1].props.children[1].props.style.display).toNotExist()
    })

    it('should not have a half star', () => {
      expect(stars[1].props.children[1].props.style.clip).toNotExist()
      expect(stars[2].props.children[1].props.style.clip).toNotExist()
    })
  })

  context('when a half value is set', () => {
    beforeEach(() => {
      renderer.render(<Rating value={2.5} />)
      tree = renderer.getRenderOutput()
      stars = tree.props.children
    })

    it('should have two active stars', () => {
      expect(stars[0].props.children[1].props.style.display).toNotExist()
      expect(stars[1].props.children[1].props.style.display).toNotExist()
    })

    it('should have a half star', () => {
      expect(stars[2].props.children[1].props.style.clip).toEqual('rect(0, .5em, 1em, 0)')
    })
  })

  context('when onClick is set', () => {
    beforeEach(() => {
      renderer.render(<Rating value={2.5} onClick={() => {}} />)
      tree = renderer.getRenderOutput()
      stars = tree.props.children
    })

    it('should set cursor pointer', () => {
      expect(stars[2].props.style.cursor).toEqual('pointer')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Rating style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

