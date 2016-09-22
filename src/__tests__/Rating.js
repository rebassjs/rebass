
import React from 'react'
import { shallow } from 'enzyme'
import { Rating } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Rating />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Rating')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Rating className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Rating foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Rating style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Rating />, {
    context: {
      rebass: {
        Rating: {
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
    <Rating
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Rating: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

