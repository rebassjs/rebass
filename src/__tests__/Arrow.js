
import React from 'react'
import { shallow } from 'enzyme'
import { Arrow } from '..'

let wrapper
let inner

test('renders', () => {
  expect(() => {
    wrapper = shallow(<Arrow />)
    inner = wrapper.first().shallow()
  }).not.toThrow()
})

test('defaults to div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Arrow')
})

test('has a default border top', () => {
  expect(typeof inner.props().style.borderTop).toBe('string')
  expect(inner.props().style.borderBottom).toBe(null)
})

test('accepts custom className props', () => {
  wrapper = shallow(<Arrow className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Arrow foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Arrow style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Arrow />, {
    context: {
      rebass: {
        Arrow: {
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
    <Arrow
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Arrow: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

