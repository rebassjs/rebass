
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Label, Checkbox } from '../src'

const renderer = TestUtils.createRenderer()

describe('Checkbox', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Checkbox name='test' label='Checkbox'/>)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Checkbox')
  })

  it('should have a Label', () => {
    expect(tree.props.children.type).toExist()
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Checkbox style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

