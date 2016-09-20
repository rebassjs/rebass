
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { DotIndicator, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<DotIndicator />)
  inner = wrapper.first().shallow()
})

test('is a div', t => {
  t.true(inner.is('div'))
})

test('has a className', t => {
  t.is(inner.props().className, 'DotIndicator')
})

test('accepts custom className props', t => {
  wrapper = shallow(<DotIndicator className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'DotIndicator foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<DotIndicator style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<DotIndicator />, {
    context: {
      rebass: {
        DotIndicator: {
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
    <DotIndicator
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

