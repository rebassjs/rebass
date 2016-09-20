
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Blockquote, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Blockquote />)
  inner = wrapper.first().shallow()
})

test('is a blockquote', t => {
  t.true(inner.is('blockquote'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Blockquote')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Blockquote className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Blockquote foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Blockquote style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Blockquote />, {
    context: {
      rebass: {
        Blockquote: {
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
    <Blockquote
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

