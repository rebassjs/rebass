
import React from 'react'
import { shallow } from 'enzyme'
import { Table } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Table />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Table')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Table className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Table foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Table style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Table />, {
    context: {
      rebass: {
        Table: {
          marginLeft: 0
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  expect(inner.props().style.marginLeft).toBe(0)
})

test('style props override context styles', () => {
  wrapper = shallow(
    <Table
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Table: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

