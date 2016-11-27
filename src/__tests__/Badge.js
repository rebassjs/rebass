
import React from 'react'
import { shallow } from 'enzyme'
import { Badge } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Badge />)
  inner = wrapper.first().shallow()
})

test('defaults to div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Badge')
})

test('has a default border radius', () => {
  expect(typeof inner.props().style.borderRadius).toBe('number')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Badge className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Badge foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Badge style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Badge />, {
    context: {
      rebass: {
        Badge: {
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
    <Badge
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Badge: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

