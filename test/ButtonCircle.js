
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { ButtonCircle, Button, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<ButtonCircle />)
  inner = wrapper.first().shallow()
})

test('is a button', t => {
  t.true(inner.is(Button))
})

test('has a className', t => {
  t.is(inner.props().className, 'ButtonCircle')
})

test('accepts custom className props', t => {
  wrapper = shallow(<ButtonCircle className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'ButtonCircle foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<ButtonCircle style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<ButtonCircle />, {
    context: {
      rebass: {
        ButtonCircle: {
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
    <ButtonCircle
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

