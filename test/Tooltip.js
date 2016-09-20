
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Tooltip, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Tooltip />)
  inner = wrapper.first().shallow()
})

test('is a span', t => {
  t.true(inner.is('span'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Tooltip')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Tooltip className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Tooltip foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Tooltip style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Tooltip />, {
    context: {
      rebass: {
        Tooltip: {
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
    <Tooltip
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

