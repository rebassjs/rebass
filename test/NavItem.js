
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { NavItem, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<NavItem />)
  inner = wrapper.first().shallow()
})

test('is a link', t => {
  t.true(inner.is('a'))
})

test('has a className', t => {
  t.is(inner.props().className, 'NavItem')
})

test('accepts custom className props', t => {
  wrapper = shallow(<NavItem className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'NavItem foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<NavItem style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
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
  t.is(inner.props().style.marginLeft, 0)
})

test('style props override context styles', t => {
  wrapper = shallow(
    <NavItem
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
  t.is(inner.props().style.color, 'tomato')
})

