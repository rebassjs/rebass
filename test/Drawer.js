
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Drawer, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Drawer />)
  inner = wrapper.first().shallow()
})

test('is a div', t => {
  t.true(inner.is('div'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Drawer')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Drawer className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Drawer foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Drawer style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(wrapper.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Drawer />, {
    context: {
      rebass: {
        Drawer: {
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
    <Drawer
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

