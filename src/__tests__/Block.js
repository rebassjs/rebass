
import React from 'react'
import { shallow } from 'enzyme'
import { Block } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Block />)
  inner = wrapper.first().shallow()
})

test('defaults to div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Block')
})

test('has a default border width', () => {
  expect(typeof inner.props().style.borderWidth).toBe('number')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Block className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Block foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Block style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Block />, {
    context: {
      rebass: {
        Block: {
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
    <Block
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Block: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

