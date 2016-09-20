
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Text, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Text />)
  inner = wrapper.first().shallow()
})

test('is a p', t => {
  t.true(inner.is('p'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Text')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Text className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Text foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Text style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Text />, {
    context: {
      rebass: {
        Text: {
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
    <Text
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

