
import React from 'react'
import { shallow } from 'enzyme'
import { Button, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', () => {
  wrapper = shallow(<Button />)
  inner = wrapper.first().shallow()
})

test('is a button', () => {
  expect(inner.is('button')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Button')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Button className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Button foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Button style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Button />, {
    context: {
      rebass: {
        Button: {
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
    <Button
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

