
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Embed, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Embed', () => {
  let tree

  beforeEach(() => {
    renderer.render(
      <Embed>
        <iframe />
      </Embed>
    )
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Embed')
  })

  it('should have a default 16:9 aspect ratio', () => {
    expect(tree.props.baseStyle.paddingBottom).toEqual(`${9 / 16 * 100}%`)
  })

  it('should add styles to children', () => {
    const iframe = tree.props.children[0]
    expect(iframe.props.style.position).toEqual('absolute')
    expect(iframe.props.style.width).toEqual('100%')
    expect(iframe.props.style.height).toEqual('100%')
    expect(iframe.props.style.top).toEqual(0)
    expect(iframe.props.style.bottom).toEqual(0)
    expect(iframe.props.style.left).toEqual(0)
    expect(iframe.props.style.border).toEqual(0)
  })

  context('when a custom ratio is set', () => {
    beforeEach(() => {
      renderer.render(<Embed ratio={3 / 4} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a padding bottom 75%', () => {
      expect(tree.props.baseStyle.paddingBottom).toEqual('75%')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Embed style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

