
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, ButtonOutline } from '../src'

const renderer = TestUtils.createRenderer()

describe('ButtonOutline', () => {
  const { scale, colors, borderRadius } = theme
  let tree

  beforeEach(() => {
    renderer.render(<ButtonOutline />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('button')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('ButtonOutline')
  })

  it('should have a primary color', () => {
    expect(tree.props.style.color).toEqual(colors.primary)
  })

  it('should have a border radius', () => {
    expect(tree.props.style.borderRadius).toEqual(borderRadius)
  })

  it('should have default padding', () => {
    expect(tree.props.style.padding).toEqual(`${scale[1]}px ${scale[2]}px`)
  })

  context('when big prop is true', () => {
    beforeEach(() => {
      renderer.render(<ButtonOutline big />)
      tree = renderer.getRenderOutput()
    })
    it('should have more padding', () => {
      expect(tree.props.style.padding).toEqual(scale[2])
    })
  })

  context('when rounded is false', () => {
    beforeEach(() => {
      renderer.render(<ButtonOutline rounded={false} />)
      tree = renderer.getRenderOutput()
    })
    it('should not have a border radius', () => {
      expect(tree.props.style.borderRadius).toEqual(0)
    })
  })

  context('when rounded is top', () => {
    beforeEach(() => {
      renderer.render(<ButtonOutline rounded={'top'} />)
      tree = renderer.getRenderOutput()
    })
    it('should have top border radii', () => {
      expect(tree.props.style.borderRadius).toEqual('2px 2px 0 0')
    })
  })

  context('when rounded is right', () => {
    beforeEach(() => {
      renderer.render(<ButtonOutline rounded={'right'} />)
      tree = renderer.getRenderOutput()
    })
    it('should have right border radii', () => {
      expect(tree.props.style.borderRadius).toEqual('0 2px 2px 0')
    })
  })

  context('when rounded is bottom', () => {
    beforeEach(() => {
      renderer.render(<ButtonOutline rounded={'bottom'} />)
      tree = renderer.getRenderOutput()
    })
    it('should have bottom border radii', () => {
      expect(tree.props.style.borderRadius).toEqual('0 0 2px 2px')
    })
  })

  context('when rounded is left', () => {
    beforeEach(() => {
      renderer.render(<ButtonOutline rounded={'left'} />)
      tree = renderer.getRenderOutput()
    })
    it('should have left border radii', () => {
      expect(tree.props.style.borderRadius).toEqual('2px 0 0 2px')
    })
  })

  context('when href is set', () => {
    beforeEach(() => {
      renderer.render(<ButtonOutline href='#!' />)
      tree = renderer.getRenderOutput()
    })
    it('should be an <a> tag', () => {
      expect(tree.type).toEqual('a')
    })
  })

  context('when color is set', () => {
    beforeEach(() => {
      renderer.render(<ButtonOutline color='#f00' />)
      tree = renderer.getRenderOutput()
    })
    it('should change the color', () => {
      expect(tree.props.style.color).toEqual('#f00')
    })
  })
})

