
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Block } from '../src'

const renderer = TestUtils.createRenderer()

describe('Block', () => {
  const { scale, colors } = theme
  let tree

  beforeEach(() => {
    renderer.render(<Block />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Block')
  })

  it('should have default padding', () => {
    expect(tree.props.style.padding).toEqual(scale[2])
  })

  it('should have default margins', () => {
    expect(tree.props.style.marginTop).toEqual(scale[2])
    expect(tree.props.style.marginBottom).toEqual(scale[2])
  })

  it('should not have borders', () => {
    expect(tree.props.style.borderStyle).toEqual('none')
    expect(tree.props.style.borderTopStyle).toEqual(null)
    expect(tree.props.style.borderRightStyle).toEqual(null)
    expect(tree.props.style.borderBottomStyle).toEqual(null)
    expect(tree.props.style.borderLeftStyle).toEqual(null)
  })

  it('should have a default border color', () => {
    expect(tree.props.style.borderColor).toEqual(colors.primary)
  })

  context('when border is set', () => {
    beforeEach(() => {
      renderer.render(<Block border />)
      tree = renderer.getRenderOutput()
    })
    it('should have a border', () => {
      expect(tree.props.style.borderStyle).toEqual('solid')
    })
  })

  context('when borderTop is set', () => {
    beforeEach(() => {
      renderer.render(<Block borderTop />)
      tree = renderer.getRenderOutput()
    })

    it('should not have a border', () => {
      expect(tree.props.style.borderStyle).toEqual('none')
    })

    it('should have a border top', () => {
      expect(tree.props.style.borderTopStyle).toEqual('solid')
    })
  })

  context('when borderRight is set', () => {
    beforeEach(() => {
      renderer.render(<Block borderRight />)
      tree = renderer.getRenderOutput()
    })

    it('should not have a border', () => {
      expect(tree.props.style.borderStyle).toEqual('none')
    })

    it('should have a border right', () => {
      expect(tree.props.style.borderRightStyle).toEqual('solid')
    })
  })

  context('when borderBottom is set', () => {
    beforeEach(() => {
      renderer.render(<Block borderBottom />)
      tree = renderer.getRenderOutput()
    })

    it('should not have a border', () => {
      expect(tree.props.style.borderStyle).toEqual('none')
    })

    it('should have a border bottom', () => {
      expect(tree.props.style.borderBottomStyle).toEqual('solid')
    })
  })

  context('when borderLeft is set', () => {
    beforeEach(() => {
      renderer.render(<Block borderLeft />)
      tree = renderer.getRenderOutput()
    })

    it('should not have a border', () => {
      expect(tree.props.style.borderStyle).toEqual('none')
    })

    it('should have a border left', () => {
      expect(tree.props.style.borderLeftStyle).toEqual('solid')
    })
  })

  context('when margin is set', () => {
    beforeEach(() => {
      renderer.render(<Block margin={72} />)
      tree = renderer.getRenderOutput()
    })

    it('should have custom margin', () => {
      expect(tree.props.style.margin).toEqual(72)
    })
  })

  context('when padding is set', () => {
    beforeEach(() => {
      renderer.render(<Block padding={72} />)
      tree = renderer.getRenderOutput()
    })

    it('should have custom padding', () => {
      expect(tree.props.style.padding).toEqual(72)
    })
  })

  context('when a color from colors object is set', () => {
    beforeEach(() => {
      renderer.render(<Block color='blue' />)
      tree = renderer.getRenderOutput()
    })
    it('should set a color from the theme', () => {
      expect(tree.props.style.color).toEqual(colors.blue)
    })
  })

  context('when a generic color value is set', () => {
    beforeEach(() => {
      renderer.render(<Block color='#0cf' />)
      tree = renderer.getRenderOutput()
    })
    it('should set the raw color', () => {
      expect(tree.props.style.color).toEqual('#0cf')
    })
  })

  context('when a background color from colors object is set', () => {
    beforeEach(() => {
      renderer.render(<Block backgroundColor='blue' />)
      tree = renderer.getRenderOutput()
    })
    it('should set a background color from the theme', () => {
      expect(tree.props.style.backgroundColor).toEqual(colors.blue)
    })
  })

  context('when a generic background color value is set', () => {
    beforeEach(() => {
      renderer.render(<Block backgroundColor='#0cf' />)
      tree = renderer.getRenderOutput()
    })
    it('should set the raw background color', () => {
      expect(tree.props.style.backgroundColor).toEqual('#0cf')
    })
  })

  context('when a border color from colors object is set', () => {
    beforeEach(() => {
      renderer.render(<Block borderColor='blue' />)
      tree = renderer.getRenderOutput()
    })
    it('should set a border color from the theme', () => {
      expect(tree.props.style.borderColor).toEqual(colors.blue)
    })
  })

  context('when a generic border color value is set', () => {
    beforeEach(() => {
      renderer.render(<Block borderColor='#0cf' />)
      tree = renderer.getRenderOutput()
    })
    it('should set the raw border color', () => {
      expect(tree.props.style.borderColor).toEqual('#0cf')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Block style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

