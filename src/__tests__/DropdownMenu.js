
import React from 'react'
import { shallow } from 'enzyme'
import { DropdownMenu } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<DropdownMenu />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('DropdownMenu')
})

test('accepts custom className props', () => {
  wrapper = shallow(<DropdownMenu className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('DropdownMenu foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<DropdownMenu style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<DropdownMenu />, {
    context: {
      rebass: {
        DropdownMenu: {
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
    <DropdownMenu
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            DropdownMenu: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

