
import React from 'react'
import { shallow } from 'enzyme'
import { Media } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Media />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Media')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Media className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Media foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Media style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Media />, {
    context: {
      rebass: {
        Media: {
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
    <Media
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Media: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

