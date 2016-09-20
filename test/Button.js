
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Button, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Button />)
  inner = wrapper.first().shallow()
})

test('is a button', t => {
  t.true(inner.is('button'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Button')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Button className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Button foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Button style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Button />, {
    context: {
      rebass: {
        Button: {
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
    <Button
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

