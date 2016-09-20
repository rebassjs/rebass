
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Banner, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Banner />)
  inner = wrapper.first().shallow()
})

test('defaults to div', t => {
  t.true(inner.is('div'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Banner')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Banner className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Banner foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Banner style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Banner />, {
    context: {
      rebass: {
        Banner: {
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
    <Banner
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

