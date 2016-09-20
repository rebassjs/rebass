
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Donut, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Donut />)
  inner = wrapper.first().shallow()
})

test('is a div', t => {
  t.true(inner.is('div'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Donut')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Donut className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Donut foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Donut style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Donut />, {
    context: {
      rebass: {
        Donut: {
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
    <Donut
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

