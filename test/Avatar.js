
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Avatar, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Avatar />)
  inner = wrapper.first().shallow()
})

test('defaults to img', t => {
  t.true(inner.is('img'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Avatar')
})

test('has a default border radius', t => {
  t.is(typeof inner.props().style.borderRadius, 'number')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Avatar className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Avatar foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Avatar style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Avatar />, {
    context: {
      rebass: {
        Avatar: {
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
    <Avatar
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

