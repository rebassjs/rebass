
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Section, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Section />)
  inner = wrapper.first().shallow()
})

test('is a section', t => {
  t.true(inner.is('section'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Section')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Section className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Section foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Section style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Section />, {
    context: {
      rebass: {
        Section: {
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
    <Section
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

