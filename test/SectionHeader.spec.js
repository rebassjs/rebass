
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { SectionHeader, HeadingLink, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('SectionHeader', () => {
  let tree, heading, description

  beforeEach(() => {
    renderer.render(<SectionHeader />)
    tree = renderer.getRenderOutput()
    heading = tree.props.children[0].props.children[0]
    description = tree.props.children[0].props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName header', () => {
    expect(tree.props.tagName).toEqual('header')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('SectionHeader')
  })

  it('should have a Heading', () => {
    expect(heading.type).toEqual(HeadingLink)
  })

  it('should set a default href', () => {
    expect(heading.props.href).toEqual('#')
  })

  it('should not have a description', () => {
    expect(description).toNotExist()
  })

  context('when heading is set', () => {
    beforeEach(() => {
      renderer.render(<SectionHeader heading='Test' />)
      tree = renderer.getRenderOutput()
      heading = tree.props.children[0].props.children[0]
      description = tree.props.children[0].props.children[1]
    })
    it('should set text to Test', () => {
      expect(heading.props.children).toEqual('Test')
    })
    it('should set href to #Test', () => {
      expect(heading.props.href).toEqual('#Test')
    })
    it('should not have a description', () => {
      expect(description).toNotExist()
    })
  })

  context('when description is set', () => {
    beforeEach(() => {
      renderer.render(<SectionHeader description='Test' />)
      tree = renderer.getRenderOutput()
      description = tree.props.children[0].props.children[1]
    })
    it('should set text to Test', () => {
      expect(description.props.children).toEqual('Test')
    })
  })

  context('when heading and href is set', () => {
    beforeEach(() => {
      renderer.render(<SectionHeader heading='Test' href='#hello' />)
      tree = renderer.getRenderOutput()
      heading = tree.props.children[0].props.children[0]
    })
    it('should set text to Test', () => {
      expect(heading.props.children).toEqual('Test')
    })
    it('should set href to #hello', () => {
      expect(heading.props.href).toEqual('#hello')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<SectionHeader style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

