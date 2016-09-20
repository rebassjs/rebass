
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { SequenceMapStep, LinkBlock, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<SequenceMapStep />)
  inner = wrapper.first().shallow()
})

test('is a LinkBlock', t => {
  t.true(inner.is(LinkBlock))
})

test('has a className', t => {
  t.is(inner.props().className, 'SequenceMapStep')
})

test('accepts custom className props', t => {
  wrapper = shallow(<SequenceMapStep className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'SequenceMapStep foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<SequenceMapStep style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<SequenceMapStep />, {
    context: {
      rebass: {
        SequenceMapStep: {
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
    <SequenceMapStep
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

