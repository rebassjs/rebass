
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { HeadingLink, Heading, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<HeadingLink />)
  inner = wrapper.first().shallow()
})

test('is a Heading', t => {
  t.true(inner.is(Heading))
})

test('has a className', t => {
  t.is(inner.props().className, 'HeadingLink')
})

test('accepts custom className props', t => {
  wrapper = shallow(<HeadingLink className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'HeadingLink foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<HeadingLink style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<HeadingLink />, {
    context: {
      rebass: {
        HeadingLink: {
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
    <HeadingLink
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

