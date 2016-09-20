
import React from 'react'
import { shallow } from 'enzyme'
import { Pre, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', () => {
  wrapper = shallow(<Pre />)
  inner = wrapper.first().shallow()
})

test('is a pre', () => {
  expect(inner.is('pre')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Pre')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Pre className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Pre foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Pre style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Pre />, {
    context: {
      rebass: {
        Pre: {
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
    <Pre
      color='blue'
      style={{
      color: 'tomato'
    }} />, {
    context: {
      rebass: {
        Arros: {
          color: 'magenta'
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

