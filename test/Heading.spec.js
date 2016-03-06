
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { config, Heading, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Heading', () => {
  const { fontSizes } = config
  let tree

  beforeEach(() => {
    renderer.render(<Heading />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName h2', () => {
    expect(tree.props.tagName).toEqual('h2')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Heading')
  })

  it('should have default font size', () => {
    expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[2])
  })

  context('when level is 1', () => {
    beforeEach(() => {
      renderer.render(<Heading level={1} />)
      tree = renderer.getRenderOutput()
    })

    it('should set tagName h1', () => {
      expect(tree.props.tagName).toEqual('h1')
    })

    it('should have h1 font size', () => {
      expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[1])
    })
  })

  context('when level is 2', () => {
    beforeEach(() => {
      renderer.render(<Heading level={2} />)
      tree = renderer.getRenderOutput()
    })

    it('should set tagName h2', () => {
      expect(tree.props.tagName).toEqual('h2')
    })

    it('should have h2 font size', () => {
      expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[2])
    })
  })

  context('when level is 3', () => {
    beforeEach(() => {
      renderer.render(<Heading level={3} />)
      tree = renderer.getRenderOutput()
    })

    it('should set tagName h3', () => {
      expect(tree.props.tagName).toEqual('h3')
    })

    it('should have h3 font size', () => {
      expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[3])
    })
  })

  context('when level is 4', () => {
    beforeEach(() => {
      renderer.render(<Heading level={4} />)
      tree = renderer.getRenderOutput()
    })

    it('should set tagName h4', () => {
      expect(tree.props.tagName).toEqual('h4')
    })

    it('should have h4 font size', () => {
      expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[4])
    })
  })

  context('when level is 5', () => {
    beforeEach(() => {
      renderer.render(<Heading level={5} />)
      tree = renderer.getRenderOutput()
    })

    it('should set tagName h5', () => {
      expect(tree.props.tagName).toEqual('h5')
    })

    it('should have h5 font size', () => {
      expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[5])
    })
  })

  context('when level is 6', () => {
    beforeEach(() => {
      renderer.render(<Heading level={6} />)
      tree = renderer.getRenderOutput()
    })

    it('should set tagName h6', () => {
      expect(tree.props.tagName).toEqual('h6')
    })

    it('should have h6 font size', () => {
      expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[6])
    })
  })

  context('when size is 0', () => {
    beforeEach(() => {
      renderer.render(<Heading size={0} />)
      tree = renderer.getRenderOutput()
    })

    it('should set tagName h2', () => {
      expect(tree.props.tagName).toEqual('h2')
    })

    it('should have h0 font size', () => {
      expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[0])
    })
  })

  context('when size is 0 and level is 4', () => {
    beforeEach(() => {
      renderer.render(<Heading size={0} level={4} />)
      tree = renderer.getRenderOutput()
    })

    it('should set tagName h4', () => {
      expect(tree.props.tagName).toEqual('h4')
    })

    it('should have h0 font size', () => {
      expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[0])
    })
  })

  context('when big is true', () => {
    beforeEach(() => {
      renderer.render(<Heading big />)
      tree = renderer.getRenderOutput()
    })

    it('should set tagName h2', () => {
      expect(tree.props.tagName).toEqual('h2')
    })

    it('should have double the fontSize', () => {
      expect(tree.props.baseStyle.fontSize).toEqual(fontSizes[2] * 2)
    })
  })

  context('when alt is true', () => {
    beforeEach(() => {
      renderer.render(<Heading alt />)
      tree = renderer.getRenderOutput()
    })

    it('should set className', () => {
      expect(tree.props.className).toEqual('Heading Heading_alt')
    })

    it('should apply alt styles', () => {
      expect(tree.props.baseStyle.opacity).toEqual(0.5)
    })
  })

  context('when _className is set', () => {
    beforeEach(() => {
      renderer.render(<Heading _className='Test' />)
      tree = renderer.getRenderOutput()
    })

    it('should set className', () => {
      expect(tree.props.className).toEqual('Test')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Heading style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

