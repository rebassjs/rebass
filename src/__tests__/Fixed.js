
import React from 'react'
import { shallow } from 'enzyme'
import { Fixed } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Fixed />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Fixed')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Fixed className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Fixed foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Fixed style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Fixed />, {
    context: {
      rebass: {
        Fixed: {
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
    <Fixed
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Fixed: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

