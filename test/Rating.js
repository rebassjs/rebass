
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Rating, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Rating />)
  inner = wrapper.first().shallow()
})

test('is a div', t => {
  t.true(inner.is('div'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Rating')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Rating className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Rating foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Rating style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Rating />, {
    context: {
      rebass: {
        Rating: {
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
    <Rating
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

