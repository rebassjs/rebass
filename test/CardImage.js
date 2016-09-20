
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { CardImage, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<CardImage src='' />)
  inner = wrapper.first().shallow()
})

test('is an img', t => {
  t.true(inner.is('img'))
})

test('has a className', t => {
  t.is(inner.props().className, 'CardImage')
})

test('accepts custom className props', t => {
  wrapper = shallow(<CardImage className='foo' src='' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'CardImage foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<CardImage style={{ color: 'tomato' }} src='' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<CardImage src='' />, {
    context: {
      rebass: {
        CardImage: {
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
    <CardImage
      color='blue'
      style={{
        color: 'tomato'
      }}
      src='' />, {
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

