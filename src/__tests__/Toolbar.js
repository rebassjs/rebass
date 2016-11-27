
import React from 'react'
import { shallow } from 'enzyme'
import { Toolbar } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Toolbar />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Toolbar')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Toolbar className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Toolbar foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Toolbar style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Toolbar />, {
    context: {
      rebass: {
        Toolbar: {
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
    <Toolbar
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Toolbar: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

