
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Arrow, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Arrow />)
  inner = wrapper.first().shallow()
})

test('defaults to div', t => {
  t.true(inner.is('div'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Arrow')
})

test('has a default border top', t => {
  t.is(typeof inner.props().style.borderTop, 'string')
  t.is(inner.props().style.borderBottom, null)
})

test('accepts custom className props', t => {
  wrapper = shallow(<Arrow className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Arrow foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Arrow style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Arrow />, {
    context: {
      rebass: {
        Arrow: {
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
    <Arrow
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

