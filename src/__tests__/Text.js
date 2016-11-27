
import React from 'react'
import { shallow } from 'enzyme'
import { Text } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Text />)
  inner = wrapper.first().shallow()
})

test('is a p', () => {
  expect(inner.is('p')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Text')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Text className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Text foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Text style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Text />, {
    context: {
      rebass: {
        Text: {
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
    <Text
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Text: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

