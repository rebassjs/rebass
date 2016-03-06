
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { config, Overlay, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Overlay', () => {
  const { scale, colors, borderRadius } = config
  let tree, dismiss, content

  beforeEach(() => {
    renderer.render(<Overlay />)
    tree = renderer.getRenderOutput()
    dismiss = tree.props.children[0]
    content = tree.props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should use Base for content', () => {
    expect(content.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Overlay')
  })

  it('should not be visible', () => {
    expect(tree.props.style.display).toEqual('none')
  })

  it('should have a dark theme', () => {
    expect(dismiss.props.style.backgroundColor).toEqual(colors.black)
    expect(dismiss.props.style.opacity).toEqual(0.875)
  })

  it('should have not have content box styling', () => {
    expect(content.props.baseStyle.padding).toNotExist()
    expect(content.props.baseStyle.backgroundColor).toNotExist()
    expect(content.props.baseStyle.borderRadius).toNotExist()
  })

  it('should have not be full width', () => {
    expect(content.props.baseStyle.width).toNotExist()
  })

  context('when open is true', () => {
    beforeEach(() => {
      renderer.render(<Overlay open />)
      tree = renderer.getRenderOutput()
    })

    it('should set display flex', () => {
      expect(tree.props.style.display).toEqual('flex')
    })
  })

  context('when dark is false', () => {
    beforeEach(() => {
      renderer.render(<Overlay dark={false} />)
      tree = renderer.getRenderOutput()
      dismiss = tree.props.children[0]
    })

    it('should set the background color to light theme', () => {
      expect(dismiss.props.style.backgroundColor).toEqual(colors.white)
    })
  })

  context('when box is true', () => {
    beforeEach(() => {
      renderer.render(<Overlay box />)
      tree = renderer.getRenderOutput()
      content = tree.props.children[1]
    })
    it('should add styles to the content box', () => {
      expect(content.props.baseStyle.padding).toEqual(scale[3])
      expect(content.props.baseStyle.backgroundColor).toEqual(colors.white)
      expect(content.props.baseStyle.borderRadius).toEqual(borderRadius)
    })
  })

  context('when fullWidth is true', () => {
    beforeEach(() => {
      renderer.render(<Overlay fullWidth />)
      tree = renderer.getRenderOutput()
      content = tree.props.children[1]
    })

    it('should set 100% width on the content box', () => {
      expect(content.props.baseStyle.width).toEqual('100%')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Overlay style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
      content = tree.props.children[1]
    })

    it('should have a custom color', () => {
      expect(content.props.style.color).toEqual('tomato')
    })
  })
})

