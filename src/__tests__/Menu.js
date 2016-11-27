
import React from 'react'
import { shallow } from 'enzyme'
import { Menu } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Menu />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Menu')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Menu className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Menu foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Menu style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Menu />, {
    context: {
      rebass: {
        Menu: {
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
    <Menu
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Menu: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

