
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Heading, config } from '../src'

let wrapper
let inner

const { fontSizes } = config

test('renders', t => {
  wrapper = shallow(<Heading />)
  inner = wrapper.first().shallow()
})

test('defaults to h2', t => {
  t.true(inner.is('h2'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Heading')
})

test('has a default font size', t => {
  t.is(inner.props().style.fontSize, fontSizes[2])
})

test('changes tag when level is set', t => {
  wrapper = shallow(<Heading level={1} />)
  inner = wrapper.first().shallow()
  t.true(inner.is('h1'))
  t.is(inner.props().style.fontSize, fontSizes[1])
})

test('changes font size when size is set', t => {
  wrapper = shallow(<Heading size={1} />)
  inner = wrapper.first().shallow()
  t.true(inner.is('h2'))
  t.is(inner.props().style.fontSize, fontSizes[1])
})

test('big prop doubles font size', t => {
  wrapper = shallow(<Heading big />)
  inner = wrapper.first().shallow()
  t.true(inner.is('h2'))
  t.is(inner.props().style.fontSize, fontSizes[2] * 2)
})

test('alt prop sets alt font styles', t => {
  wrapper = shallow(<Heading alt />)
  inner = wrapper.first().shallow()
  t.regex(inner.props().className, /Heading_alt/)
})

test('accepts custom className props', t => {
  wrapper = shallow(<Heading className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Heading foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Heading style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Heading />, {
    context: {
      rebass: {
        Heading: {
          fontWeight: 400
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  t.is(inner.props().style.fontWeight, 400)
})

test('style props override context styles', t => {
  wrapper = shallow(<Heading style={{
    color: 'tomato'
  }} />, {
    context: {
      rebass: {
        Heading: {
          color: 'magenta'
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

