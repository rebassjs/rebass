
import React from 'react'
import { shallow } from 'enzyme'
import { Avatar } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Avatar />)
  inner = wrapper.first().shallow()
})

test('defaults to img', () => {
  expect(inner.is('img')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Avatar')
})

test('has a default border radius', () => {
  expect(typeof inner.props().style.borderRadius).toBe('number')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Avatar className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Avatar foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Avatar style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Avatar />, {
    context: {
      rebass: {
        Avatar: {
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
    <Avatar
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Avatar: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

