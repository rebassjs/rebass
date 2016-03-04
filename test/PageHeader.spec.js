
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { PageHeader, Heading, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('PageHeader', () => {
  let tree, heading, description

  beforeEach(() => {
    renderer.render(<PageHeader />)
    tree = renderer.getRenderOutput()
    heading = tree.props.children[0].props.children[0]
    description = tree.props.children[0].props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should set tagName', () => {
    expect(tree.props.tagName).toEqual('header')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('PageHeader')
  })

  it('should have a Heading', () => {
    expect(heading.type).toEqual(Heading)
  })

  it('should not have a description', () => {
    expect(description).toNotExist()
  })

  context('when heading is set', () => {
    beforeEach(() => {
      renderer.render(<PageHeader heading='Test' />)
      tree = renderer.getRenderOutput()
      heading = tree.props.children[0].props.children[0]
    })
    it('should have a Heading with the text Test', () => {
      expect(heading.props.children).toEqual('Test')
    })
  })

  context('when description is set', () => {
    beforeEach(() => {
      renderer.render(<PageHeader description='Test' />)
      tree = renderer.getRenderOutput()
      description = tree.props.children[0].props.children[1]
    })
    it('should have a description with the text Test', () => {
      expect(description.props.children).toEqual('Test')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<PageHeader style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

