
import React from 'react'
import { shallow } from 'enzyme'
import { Switch } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Switch />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Switch')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Switch className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Switch foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Switch style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Switch />, {
    context: {
      rebass: {
        Switch: {
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
    <Switch
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Switch: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

