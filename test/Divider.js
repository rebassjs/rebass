
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Divider, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Divider />)
  inner = wrapper.first().shallow()
})

test('is an hr', t => {
  t.true(inner.is('hr'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Divider')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Divider className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Divider foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Divider style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Divider />, {
    context: {
      rebass: {
        Divider: {
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
    <Divider
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

