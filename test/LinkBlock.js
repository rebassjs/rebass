
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { LinkBlock, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<LinkBlock />)
  inner = wrapper.first().shallow()
})

test('is a link', t => {
  t.true(inner.is('a'))
})

test('has a className', t => {
  t.is(inner.props().className, 'LinkBlock')
})

test('accepts custom className props', t => {
  wrapper = shallow(<LinkBlock className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'LinkBlock foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<LinkBlock style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<LinkBlock />, {
    context: {
      rebass: {
        LinkBlock: {
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
    <LinkBlock
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

