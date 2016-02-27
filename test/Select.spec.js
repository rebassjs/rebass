
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Select, Label } from '../src'

const renderer = TestUtils.createRenderer()

describe('Select', () => {
  let tree, select

  beforeEach(() => {
    renderer.render(<Select name='test_select' label='Test' />)
    tree = renderer.getRenderOutput()
    select = tree.props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Select')
  })

  it('should have a Label', () => {
    expect(tree.props.children[0].type).toEqual(Label)
  })

  it('should have an select element', () => {
    expect(select.type).toEqual('select')
  })

  context('when options are set', () => {
    beforeEach(() => {
      renderer.render(
        <Select
          name='test_select'
          label='Test'
          options={[
            { value: 2, label: 'Two' },
            { value: 4, label: 'Four' }
          ]} />
      )
      tree = renderer.getRenderOutput()
      select = tree.props.children[1]
    })
    it('should have child <option> elements', () => {
      expect(select.props.children.length).toEqual(2)
      expect(select.props.children[0].type).toEqual('option')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Select name='test_select' label='Test' style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
      select = tree.props.children[1]
    })

    it('should have a custom color', () => {
      expect(select.props.style.color).toEqual('tomato')
    })
  })
})

