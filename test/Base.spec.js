
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Base', () => {
  const { fontSizes } = theme
  let tree

  beforeEach(() => {
    renderer.render(<Base />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should not have a className', () => {
    expect(tree.props.className).toNotExist()
  })

  context('when tagName is an HTML element string')
  context('when tagName is a component')
  context('when componentName is set')
  context('when context is set for theme')
  context('when context is set for componentName')
  context('when style is set')
  context('when context and style is set')

  context('when m is set')
  context('when mx is set')
  context('when my is set')
  context('when mt is set')
  context('when my and mt is set')

  context('when p is set')
  context('when px is set')
  context('when py is set')
  context('when pt is set')
  context('when py and pt is set')

  context('when rounded is true')
  context('when rounded is false')
  context('when rounded top is set')
  context('when rounded right is set')
  context('when rounded bottom is set')
  context('when rounded left is set')

  context('when context is set', () => {
    beforeEach(() => {
      renderer.render(<Base componentName='Test' />, {
        rebass: {
          Test: {
            backgroundColor: 'tomato'
          }
        }
      })
      tree = renderer.getRenderOutput()
    })

    it('should have a custom background color', () => {
      expect(tree.props.style.backgroundColor).toEqual('tomato')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Base style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

