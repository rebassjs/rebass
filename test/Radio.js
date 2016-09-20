
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Radio, Label, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Radio />)
  inner = wrapper.first().shallow()
})

test('is a Label', t => {
  t.true(inner.is(Label))
})

test('has a className', t => {
  t.is(inner.props().className, 'Radio')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Radio className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Radio foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Radio style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Radio />, {
    context: {
      rebass: {
        Radio: {
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
    <Radio
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

