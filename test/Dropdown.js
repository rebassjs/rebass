
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Dropdown, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Dropdown />)
  inner = wrapper.first().shallow()
})

test('is a div', t => {
  t.true(inner.is('div'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Dropdown')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Dropdown className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Dropdown foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Dropdown style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Dropdown />, {
    context: {
      rebass: {
        Dropdown: {
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
    <Dropdown
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

