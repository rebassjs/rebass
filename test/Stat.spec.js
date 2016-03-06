
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Stat, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Stat', () => {
  let tree, value, label

  beforeEach(() => {
    renderer.render(<Stat value='32' label='Kittens' />)
    tree = renderer.getRenderOutput()
    value = tree.props.children[1]
    label = tree.props.children[2]
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a value with no unit', () => {
    expect(value.props.children[0]).toEqual('32')
  })

  it('should have a label', () => {
    expect(label.props.children).toEqual('Kittens')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Stat')
  })

  context('when unit is set', () => {
    beforeEach(() => {
      renderer.render(<Stat value='32' unit='Lil' label='Kittens' />)
      tree = renderer.getRenderOutput()
      value = tree.props.children[1]
      label = tree.props.children[2]
    })

    it('should have a unit', () => {
      expect(value.props.children.length).toEqual(2)
    })
  })

  context('when topLabel is true', () => {
    beforeEach(() => {
      renderer.render(<Stat topLabel value='32' unit='Lil' label='Kittens' />)
      tree = renderer.getRenderOutput()
      label = tree.props.children[0]
      value = tree.props.children[1]
    })

    it('should display label on top', () => {
      expect(label.props.children).toEqual('Kittens')
    })

    it('should display value below', () => {
      expect(value.props.children[0]).toEqual('32')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Stat style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

