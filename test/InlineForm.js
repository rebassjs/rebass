
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { InlineForm, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<InlineForm />)
  inner = wrapper.first().shallow()
})

test('is a form', t => {
  t.true(inner.is('form'))
})

test('has a className', t => {
  t.is(inner.props().className, 'InlineForm')
})

test('accepts custom className props', t => {
  wrapper = shallow(<InlineForm className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'InlineForm foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<InlineForm style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<InlineForm />, {
    context: {
      rebass: {
        InlineForm: {
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
    <InlineForm
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

