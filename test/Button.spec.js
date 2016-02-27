
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Button } from '../src'

const renderer = TestUtils.createRenderer()

describe('Button', () => {
  const { scale, colors, borderRadius } = theme
  let tree

  beforeEach(() => {
    renderer.render(<Button />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('button')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Button')
  })

  it('should have a primary background color', () => {
    expect(tree.props.style.backgroundColor).toEqual(colors.primary)
  })

  it('should have a border radius', () => {
    expect(tree.props.style.borderRadius).toEqual(borderRadius)
  })

  it('should have default padding', () => {
    expect(tree.props.style.padding).toEqual(`${scale[1]}px ${scale[2]}px`)
  })

  context('when big prop is true', () => {
    beforeEach(() => {
      renderer.render(<Button big />)
      tree = renderer.getRenderOutput()
    })
    it('should have more padding', () => {
      expect(tree.props.style.padding).toEqual(scale[2])
    })
  })

  context('when rounded is false', () => {
    beforeEach(() => {
      renderer.render(<Button rounded={false} />)
      tree = renderer.getRenderOutput()
    })
    it('should not have a border radius', () => {
      expect(tree.props.style.borderRadius).toEqual(0)
    })
  })

  context('when rounded is top', () => {
    beforeEach(() => {
      renderer.render(<Button rounded={'top'} />)
      tree = renderer.getRenderOutput()
    })
    it('should have top border radii', () => {
      expect(tree.props.style.borderRadius).toEqual('2px 2px 0 0')
    })
  })

  context('when rounded is right', () => {
    beforeEach(() => {
      renderer.render(<Button rounded={'right'} />)
      tree = renderer.getRenderOutput()
    })
    it('should have right border radii', () => {
      expect(tree.props.style.borderRadius).toEqual('0 2px 2px 0')
    })
  })

  context('when rounded is bottom', () => {
    beforeEach(() => {
      renderer.render(<Button rounded={'bottom'} />)
      tree = renderer.getRenderOutput()
    })
    it('should have bottom border radii', () => {
      expect(tree.props.style.borderRadius).toEqual('0 0 2px 2px')
    })
  })

  context('when rounded is left', () => {
    beforeEach(() => {
      renderer.render(<Button rounded={'left'} />)
      tree = renderer.getRenderOutput()
    })
    it('should have left border radii', () => {
      expect(tree.props.style.borderRadius).toEqual('2px 0 0 2px')
    })
  })

  context('when href is set', () => {
    beforeEach(() => {
      renderer.render(<Button href='#!' />)
      tree = renderer.getRenderOutput()
    })
    it('should be an <a> tag', () => {
      expect(tree.type).toEqual('a')
    })
  })

  context('when color is set', () => {
    beforeEach(() => {
      renderer.render(<Button color='#f00' />)
      tree = renderer.getRenderOutput()
    })
    it('should change the color', () => {
      expect(tree.props.style.color).toEqual('#f00')
    })
  })

  context('when backgroundColor is set', () => {
    beforeEach(() => {
      renderer.render(<Button backgroundColor='#f00' />)
      tree = renderer.getRenderOutput()
    })
    it('should change the background color', () => {
      expect(tree.props.style.backgroundColor).toEqual('#f00')
    })
  })
})

