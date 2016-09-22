
import React from 'react'
import { shallow } from 'enzyme'
import { Tooltip } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Tooltip />)
  inner = wrapper.first().shallow()
})

test('is a span', () => {
  expect(inner.is('span')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Tooltip')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Tooltip className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Tooltip foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Tooltip style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Tooltip />, {
    context: {
      rebass: {
        Tooltip: {
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
    <Tooltip
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Tooltip: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

