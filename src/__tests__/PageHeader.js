
import React from 'react'
import { shallow } from 'enzyme'
import { PageHeader } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<PageHeader />)
  inner = wrapper.first().shallow()
})

test('is a header', () => {
  expect(inner.is('header')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('PageHeader')
})

test('accepts custom className props', () => {
  wrapper = shallow(<PageHeader className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('PageHeader foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<PageHeader style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<PageHeader />, {
    context: {
      rebass: {
        PageHeader: {
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
    <PageHeader
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            PageHeader: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

