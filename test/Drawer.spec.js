
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Drawer } from '../src'

const renderer = TestUtils.createRenderer()

describe('Drawer', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Drawer />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Drawer')
  })

  it('should have default width', () => {
    expect(tree.props.style.width).toEqual(320)
  })

  it('should not have default height', () => {
    expect(tree.props.style.height).toNotExist()
  })

  it('should have transform set', () => {
    expect(tree.props.style.transform).toEqual('translateX(-100%)')
  })

  it('should be anchored to the left', () => {
    expect(tree.props.style.top).toEqual(0)
    expect(tree.props.style.right).toNotExist()
    expect(tree.props.style.bottom).toEqual(0)
    expect(tree.props.style.left).toEqual(0)
  })

  context('when open is true', () => {
    beforeEach(() => {
      renderer.render(<Drawer open />)
      tree = renderer.getRenderOutput()
    })
    it('should not have transform set', () => {
      expect(tree.props.style.transform).toNotExist()
    })
  })

  context('when size is set', () => {
    beforeEach(() => {
      renderer.render(<Drawer size={512} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom width', () => {
      expect(tree.props.style.width).toEqual(512)
    })
  })

  context('when position is top', () => {
    beforeEach(() => {
      renderer.render(<Drawer position='top' />)
      tree = renderer.getRenderOutput()
    })

    it('should be anchored to the top', () => {
      expect(tree.props.style.top).toEqual(0)
      expect(tree.props.style.right).toEqual(0)
      expect(tree.props.style.bottom).toNotExist()
      expect(tree.props.style.left).toEqual(0)
    })

    it('should not have a width', () => {
      expect(tree.props.style.width).toNotExist()
    })

    it('should have a height', () => {
      expect(tree.props.style.height).toEqual(320)
    })

    it('should have a transform', () => {
      expect(tree.props.style.transform).toEqual('translateY(-100%)')
    })
  })

  context('when position is bottom', () => {
    beforeEach(() => {
      renderer.render(<Drawer position='bottom' />)
      tree = renderer.getRenderOutput()
    })

    it('should be anchored to the bottom', () => {
      expect(tree.props.style.top).toNotExist()
      expect(tree.props.style.right).toEqual(0)
      expect(tree.props.style.bottom).toEqual(0)
      expect(tree.props.style.left).toEqual(0)
    })

    it('should not have a width', () => {
      expect(tree.props.style.width).toNotExist()
    })

    it('should have a height', () => {
      expect(tree.props.style.height).toEqual(320)
    })

    it('should have a transform', () => {
      expect(tree.props.style.transform).toEqual('translateY(100%)')
    })
  })

  context('when position is left', () => {
    beforeEach(() => {
      renderer.render(<Drawer position='left' />)
      tree = renderer.getRenderOutput()
    })

    it('should be anchored to the left', () => {
      expect(tree.props.style.top).toEqual(0)
      expect(tree.props.style.right).toNotExist()
      expect(tree.props.style.bottom).toEqual(0)
      expect(tree.props.style.left).toEqual(0)
    })

    it('should have a width', () => {
      expect(tree.props.style.width).toEqual(320)
    })

    it('should not have a height', () => {
      expect(tree.props.style.height).toNotExist()
    })

    it('should have a transform', () => {
      expect(tree.props.style.transform).toEqual('translateX(-100%)')
    })
  })

  context('when position is right', () => {
    beforeEach(() => {
      renderer.render(<Drawer position='right' />)
      tree = renderer.getRenderOutput()
    })

    it('should be anchored to the right', () => {
      expect(tree.props.style.top).toEqual(0)
      expect(tree.props.style.right).toEqual(0)
      expect(tree.props.style.bottom).toEqual(0)
      expect(tree.props.style.left).toNotExist()
    })

    it('should have a width', () => {
      expect(tree.props.style.width).toEqual(320)
    })

    it('should not have a height', () => {
      expect(tree.props.style.height).toNotExist()
    })

    it('should have a transform', () => {
      expect(tree.props.style.transform).toEqual('translateX(100%)')
    })
  })

  context('when size is set and position is top', () => {
    beforeEach(() => {
      renderer.render(<Drawer position='top' size={512} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom height', () => {
      expect(tree.props.style.height).toEqual(512)
    })

    it('should not have a width', () => {
      expect(tree.props.style.width).toNotExist()
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Drawer style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

