
import React from 'react'
import { shallow } from 'enzyme'
import { BoxShadow } from '..'

let wrapper
let inner

test('renders', () => {
  expect(() => {
    wrapper = shallow(<BoxShadow />)
    inner = wrapper.first().shallow()
  }).not.toThrow()
})

test('defaults to div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('BoxShadow')
})

test('has a default box shadow', () => {
  expect(typeof inner.props().style.boxShadow).toBe('string')
})

test('accepts custom className props', () => {
  wrapper = shallow(<BoxShadow className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('BoxShadow foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<BoxShadow style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<BoxShadow />, {
    context: {
      rebass: {
        BoxShadow: {
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
    <BoxShadow
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            BoxShadow: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

