
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Banner, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Banner', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Banner />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Banner')
  })

  it('should set align-items center by default', () => {
    expect(tree.props.baseStyle.alignItems).toEqual('center')
  })

  it('should not have a background image', () => {
    expect(tree.props.baseStyle.backgroundImage).toEqual(null)
  })

  context('when align is left', () => {
    beforeEach(() => {
      renderer.render(<Banner align='left' />)
      tree = renderer.getRenderOutput()
    })

    it('should set align-items flex-start', () => {
      expect(tree.props.baseStyle.alignItems).toEqual('flex-start')
    })
  })

  context('when align is center', () => {
    beforeEach(() => {
      renderer.render(<Banner align='center' />)
      tree = renderer.getRenderOutput()
    })

    it('should set align-items center', () => {
      expect(tree.props.baseStyle.alignItems).toEqual('center')
    })
  })

  context('when align is right', () => {
    beforeEach(() => {
      renderer.render(<Banner align='right' />)
      tree = renderer.getRenderOutput()
    })

    it('should set align-items flex-end', () => {
      expect(tree.props.baseStyle.alignItems).toEqual('flex-end')
    })
  })

  context('when background image is set', () => {
    beforeEach(() => {
      renderer.render(<Banner backgroundImage='http://placehold.it/256' />)
      tree = renderer.getRenderOutput()
    })

    it('should have a background image', () => {
      expect(tree.props.baseStyle.backgroundImage).toBeA('string')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Banner style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

