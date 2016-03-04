
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { config, Media, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Media', () => {
  const { scale } = config
  let tree, img, body

  beforeEach(() => {
    renderer.render(
      <Media img='http://placehold.it/96'>
        Test
      </Media>
    )
    tree = renderer.getRenderOutput()
    img = tree.props.children[0]
    body = tree.props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Media')
  })

  it('should have an image', () => {
    expect(img.type).toEqual('img')
  })

  it('should have margin right for the image', () => {
    expect(img.props.style.marginRight).toEqual(scale[2])
  })

  it('should not have margin left for the image', () => {
    expect(img.props.style.marginLeft).toEqual(0)
  })

  it('should have a body', () => {
    expect(body.type).toEqual('div')
  })

  it('should not have a default align-items value', () => {
    expect(tree.props.baseStyle.alignItems).toNotExist()
  })

  context('when right is true', () => {
    beforeEach(() => {
      renderer.render(
        <Media img='http://placehold.it/96' right>
          Test
        </Media>
      )
      tree = renderer.getRenderOutput()
      img = tree.props.children[0]
      body = tree.props.children[1]
    })

    it('should have margin left for the image', () => {
      expect(img.props.style.marginLeft).toEqual(scale[2])
    })

    it('should not have margin right for the image', () => {
      expect(img.props.style.marginRight).toEqual(0)
    })

    it('should set order 9999 on the image', () => {
      expect(img.props.style.order).toEqual(9999)
    })
  })

  context('when align is top', () => {
    beforeEach(() => {
      renderer.render(
        <Media img='http://placehold.it/96' align='top'>
          Test
        </Media>
      )
      tree = renderer.getRenderOutput()
    })
    it('should set align-items flex-start', () => {
      expect(tree.props.baseStyle.alignItems).toEqual('flex-start')
    })
  })

  context('when align is center', () => {
    beforeEach(() => {
      renderer.render(
        <Media img='http://placehold.it/96' align='center'>
          Test
        </Media>
      )
      tree = renderer.getRenderOutput()
    })
    it('should set align-items center', () => {
      expect(tree.props.baseStyle.alignItems).toEqual('center')
    })
  })

  context('when align is bottom', () => {
    beforeEach(() => {
      renderer.render(
        <Media img='http://placehold.it/96' align='bottom'>
          Test
        </Media>
      )
      tree = renderer.getRenderOutput()
    })
    it('should set align-items flex-end', () => {
      expect(tree.props.baseStyle.alignItems).toEqual('flex-end')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Media style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

