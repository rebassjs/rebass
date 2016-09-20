
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Label, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Label />)
  inner = wrapper.first().shallow()
})

test('is a label', t => {
  t.true(inner.is('label'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Label')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Label className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Label foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Label style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Label />, {
    context: {
      rebass: {
        Label: {
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
    <Label
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

