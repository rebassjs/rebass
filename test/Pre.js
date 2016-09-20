
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Pre, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Pre />)
  inner = wrapper.first().shallow()
})

test('is a pre', t => {
  t.true(inner.is('pre'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Pre')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Pre className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Pre foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Pre style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Pre />, {
    context: {
      rebass: {
        Pre: {
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
    <Pre
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

