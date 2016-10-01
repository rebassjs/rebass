
import React from 'react'
import { shallow } from 'enzyme'
import { Code } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Code />)
  inner = wrapper.first().shallow()
})

test('is a code element', () => {
  expect(inner.is('code')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Code')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Code className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Code foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Code style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Code />, {
    context: {
      rebass: {
        Code: {
          color: 'tomato'
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('style props override context styles', () => {
  wrapper = shallow(
    <Code
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Code: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

