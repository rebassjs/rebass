
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Drawer } from '../src'

const renderer = TestUtils.createRenderer()

describe('Drawer', () => {
  let tree, dismiss, content

  beforeEach(() => {
    renderer.render(<Drawer />)
    tree = renderer.getRenderOutput()
    dismiss = tree.props.children[0]
    content = tree.props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Drawer')
  })

  it('should have default width', () => {
    expect(content.props.style.width).toEqual(320)
  })

  it('should not have default height', () => {
    expect(content.props.style.height).toNotExist()
  })

  it('should have transform set', () => {
    expect(content.props.style.transform).toEqual('translateX(-100%)')
  })

  it('should hide the dismiss overlay', () => {
    expect(dismiss.props.style.display).toEqual('none')
  })

  it('should be anchored to the left', () => {
    expect(content.props.style.top).toEqual(0)
    expect(content.props.style.right).toNotExist()
    expect(content.props.style.bottom).toEqual(0)
    expect(content.props.style.left).toEqual(0)
  })

  context('when open is true', () => {
    beforeEach(() => {
      renderer.render(<Drawer open />)
      tree = renderer.getRenderOutput()
      dismiss = tree.props.children[0]
      content = tree.props.children[1]
    })

    it('should not hide the dismiss overlay', () => {
      expect(dismiss.props.style.display).toNotExist()
    })

    it('should not have transform set', () => {
      expect(content.props.style.transform).toNotExist()
    })
  })

  context('when size is set', () => {
    beforeEach(() => {
      renderer.render(<Drawer size={512} />)
      tree = renderer.getRenderOutput()
      content = tree.props.children[1]
    })
    it('should have a custom width', () => {
      expect(content.props.style.width).toEqual(512)
    })
  })

  context('when position is top', () => {
    beforeEach(() => {
      renderer.render(<Drawer position='top' />)
      tree = renderer.getRenderOutput()
      content = tree.props.children[1]
    })

    it('should be anchored to the top', () => {
      expect(content.props.style.top).toEqual(0)
      expect(content.props.style.right).toEqual(0)
      expect(content.props.style.bottom).toNotExist()
      expect(content.props.style.left).toEqual(0)
    })

    it('should not have a width', () => {
      expect(content.props.style.width).toNotExist()
    })

    it('should have a height', () => {
      expect(content.props.style.height).toEqual(320)
    })

    it('should have a transform', () => {
      expect(content.props.style.transform).toEqual('translateY(-100%)')
    })
  })

  context('when position is bottom', () => {
    beforeEach(() => {
      renderer.render(<Drawer position='bottom' />)
      tree = renderer.getRenderOutput()
      content = tree.props.children[1]
    })

    it('should be anchored to the bottom', () => {
      expect(content.props.style.top).toNotExist()
      expect(content.props.style.right).toEqual(0)
      expect(content.props.style.bottom).toEqual(0)
      expect(content.props.style.left).toEqual(0)
    })

    it('should not have a width', () => {
      expect(content.props.style.width).toNotExist()
    })

    it('should have a height', () => {
      expect(content.props.style.height).toEqual(320)
    })

    it('should have a transform', () => {
      expect(content.props.style.transform).toEqual('translateY(100%)')
    })
  })

  context('when position is left', () => {
    beforeEach(() => {
      renderer.render(<Drawer position='left' />)
      tree = renderer.getRenderOutput()
      content = tree.props.children[1]
    })

    it('should be anchored to the left', () => {
      expect(content.props.style.top).toEqual(0)
      expect(content.props.style.right).toNotExist()
      expect(content.props.style.bottom).toEqual(0)
      expect(content.props.style.left).toEqual(0)
    })

    it('should have a width', () => {
      expect(content.props.style.width).toEqual(320)
    })

    it('should not have a height', () => {
      expect(content.props.style.height).toNotExist()
    })

    it('should have a transform', () => {
      expect(content.props.style.transform).toEqual('translateX(-100%)')
    })
  })

  context('when position is right', () => {
    beforeEach(() => {
      renderer.render(<Drawer position='right' />)
      tree = renderer.getRenderOutput()
      content = tree.props.children[1]
    })

    it('should be anchored to the right', () => {
      expect(content.props.style.top).toEqual(0)
      expect(content.props.style.right).toEqual(0)
      expect(content.props.style.bottom).toEqual(0)
      expect(content.props.style.left).toNotExist()
    })

    it('should have a width', () => {
      expect(content.props.style.width).toEqual(320)
    })

    it('should not have a height', () => {
      expect(content.props.style.height).toNotExist()
    })

    it('should have a transform', () => {
      expect(content.props.style.transform).toEqual('translateX(100%)')
    })
  })

  context('when size is set and position is top', () => {
    beforeEach(() => {
      renderer.render(<Drawer position='top' size={512} />)
      tree = renderer.getRenderOutput()
      content = tree.props.children[1]
    })

    it('should have a custom height', () => {
      expect(content.props.style.height).toEqual(512)
    })

    it('should not have a width', () => {
      expect(content.props.style.width).toNotExist()
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Drawer style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
      content = tree.props.children[1]
    })

    it('should have a custom color', () => {
      expect(content.props.style.color).toEqual('tomato')
    })
  })
})

