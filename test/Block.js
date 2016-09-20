
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Block, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Block />)
  inner = wrapper.first().shallow()
})

test('defaults to div', t => {
  t.true(inner.is('div'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Block')
})

test('has a default border width', t => {
  t.is(typeof inner.props().style.borderWidth, 'number')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Block className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Block foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Block style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Block />, {
    context: {
      rebass: {
        Block: {
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
    <Block
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

