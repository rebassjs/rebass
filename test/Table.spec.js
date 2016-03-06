
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Table, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Table', () => {
  let tree, table, headings, body

  beforeEach(() => {
    renderer.render(<Table />)
    tree = renderer.getRenderOutput()
    table = tree.props.children
    headings = table.props.children[0].props.children
    body = table.props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Table')
  })

  it('should contain a table', () => {
    expect(table.type).toEqual('table')
  })

  it('should contain a tr for headings', () => {
    expect(headings.type).toEqual('tr')
  })

  it('should contain a tbody for data', () => {
    expect(body.type).toEqual('tbody')
  })

  it('should not contain any headings by default', () => {
    expect(headings.props.children).toEqual([])
  })

  it('should not contain any tbody rows by default', () => {
    expect(body.props.children).toEqual([])
  })

  context('when headings is set', () => {
    beforeEach(() => {
      renderer.render(<Table headings={['One', 'Two']} />)
      tree = renderer.getRenderOutput()
      table = tree.props.children
      headings = table.props.children[0].props.children
      body = table.props.children[1]
    })

    it('should have two th tags', () => {
      expect(headings.props.children.length).toEqual(2)
    })

    it('should pass the headings as children', () => {
      expect(headings.props.children[0].props.children).toEqual('One')
      expect(headings.props.children[1].props.children).toEqual('Two')
    })
  })

  context('when data is set', () => {
    beforeEach(() => {
      renderer.render(
        <Table
          data={[
            ['One', 'Two'],
            ['Three', 'Four']
          ]} />
      )
      tree = renderer.getRenderOutput()
      table = tree.props.children
      headings = table.props.children[0].props.children
      body = table.props.children[1]
    })

    it('should have two tr tags', () => {
      expect(body.props.children.length).toEqual(2)
    })

    it('should pass the data as children to td', () => {
      const row1 = body.props.children[0]
      const row2 = body.props.children[1]
      expect(row1.props.children[0].props.children).toEqual('One')
      expect(row1.props.children[1].props.children).toEqual('Two')
      expect(row2.props.children[0].props.children).toEqual('Three')
      expect(row2.props.children[1].props.children).toEqual('Four')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Table style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

