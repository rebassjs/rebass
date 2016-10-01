
import React from 'react'
import { shallow } from 'enzyme'
import { Message } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Message />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Message')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Message className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Message foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Message style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Message />, {
    context: {
      rebass: {
        Message: {
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
    <Message
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Message: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

