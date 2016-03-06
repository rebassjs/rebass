
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { config, Block, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Block', () => {
  const { colors } = config
  let tree

  beforeEach(() => {
    renderer.render(<Block />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Block')
  })

  it('should not have borders', () => {
    expect(tree.props.baseStyle.borderStyle).toEqual('none')
    expect(tree.props.baseStyle.borderTopStyle).toEqual(null)
    expect(tree.props.baseStyle.borderRightStyle).toEqual(null)
    expect(tree.props.baseStyle.borderBottomStyle).toEqual(null)
    expect(tree.props.baseStyle.borderLeftStyle).toEqual(null)
  })

  it('should have a default border color', () => {
    expect(tree.props.baseStyle.borderColor).toEqual(colors.primary)
  })

  context('when border is set', () => {
    beforeEach(() => {
      renderer.render(<Block border />)
      tree = renderer.getRenderOutput()
    })
    it('should have a border', () => {
      expect(tree.props.baseStyle.borderStyle).toEqual('solid')
    })
  })

  context('when borderTop is set', () => {
    beforeEach(() => {
      renderer.render(<Block borderTop />)
      tree = renderer.getRenderOutput()
    })

    it('should not have a border', () => {
      expect(tree.props.baseStyle.borderStyle).toEqual('none')
    })

    it('should have a border top', () => {
      expect(tree.props.baseStyle.borderTopStyle).toEqual('solid')
    })
  })

  context('when borderRight is set', () => {
    beforeEach(() => {
      renderer.render(<Block borderRight />)
      tree = renderer.getRenderOutput()
    })

    it('should not have a border', () => {
      expect(tree.props.baseStyle.borderStyle).toEqual('none')
    })

    it('should have a border right', () => {
      expect(tree.props.baseStyle.borderRightStyle).toEqual('solid')
    })
  })

  context('when borderBottom is set', () => {
    beforeEach(() => {
      renderer.render(<Block borderBottom />)
      tree = renderer.getRenderOutput()
    })

    it('should not have a border', () => {
      expect(tree.props.baseStyle.borderStyle).toEqual('none')
    })

    it('should have a border bottom', () => {
      expect(tree.props.baseStyle.borderBottomStyle).toEqual('solid')
    })
  })

  context('when borderLeft is set', () => {
    beforeEach(() => {
      renderer.render(<Block borderLeft />)
      tree = renderer.getRenderOutput()
    })

    it('should not have a border', () => {
      expect(tree.props.baseStyle.borderStyle).toEqual('none')
    })

    it('should have a border left', () => {
      expect(tree.props.baseStyle.borderLeftStyle).toEqual('solid')
    })
  })

  context('when a border color from colors object is set', () => {
    beforeEach(() => {
      renderer.render(<Block borderColor='blue' />)
      tree = renderer.getRenderOutput()
    })
    it('should set a border color from the config', () => {
      expect(tree.props.baseStyle.borderColor).toEqual(colors.blue)
    })
  })

  context('when a generic border color value is set', () => {
    beforeEach(() => {
      renderer.render(<Block borderColor='#f00' />)
      tree = renderer.getRenderOutput()
    })
    it('should set the raw border color', () => {
      expect(tree.props.baseStyle.borderColor).toEqual('#f00')
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

