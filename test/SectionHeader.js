
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { SectionHeader, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<SectionHeader />)
  inner = wrapper.first().shallow()
})

test('is a header', t => {
  t.true(inner.is('header'))
})

test('has a className', t => {
  t.is(inner.props().className, 'SectionHeader')
})

test('accepts custom className props', t => {
  wrapper = shallow(<SectionHeader className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'SectionHeader foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<SectionHeader style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<SectionHeader />, {
    context: {
      rebass: {
        SectionHeader: {
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
    <SectionHeader
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

