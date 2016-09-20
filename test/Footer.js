
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Footer, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Footer />)
  inner = wrapper.first().shallow()
})

test('is a footer', t => {
  t.true(inner.is('footer'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Footer')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Footer className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Footer foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Footer style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Footer />, {
    context: {
      rebass: {
        Footer: {
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
    <Footer
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

