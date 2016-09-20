
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Overlay, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Overlay />)
  inner = wrapper.first().shallow()
})

test('is a div', t => {
  t.true(inner.is('div'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Overlay')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Overlay className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Overlay foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Overlay style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(wrapper.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Overlay />, {
    context: {
      rebass: {
        Overlay: {
          marginLeft: 0
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  t.is(wrapper.props().style.marginLeft, 0)
})

test('style props override context styles', t => {
  wrapper = shallow(
    <Overlay
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
  t.is(wrapper.props().style.color, 'tomato')
})

