
import React from 'react'
import { shallow, mount } from 'enzyme'
import { isDOMComponent } from 'react-addons-test-utils'
import { NavItem } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<NavItem />)
  inner = wrapper.first().shallow()
})

test('is a link', () => {
  expect(inner.is('a')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('NavItem')
})

test('accepts custom className props', () => {
  wrapper = shallow(<NavItem className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('NavItem foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<NavItem style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<NavItem />, {
    context: {
      rebass: {
        NavItem: {
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
    <NavItem
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            NavItem: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('baseRef returns the link element', () => {
  let link
  wrapper = mount(
    <NavItem
      baseRef={r => { link = r }}
    />
  )
  expect(link).toBeDefined()
  expect(isDOMComponent(link)).toBe(true)
})

