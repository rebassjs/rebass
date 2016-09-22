
import React from 'react'
import { shallow } from 'enzyme'
import { Blockquote } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Blockquote />)
  inner = wrapper.first().shallow()
})

test('is a blockquote', () => {
  expect(inner.is('blockquote')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Blockquote')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Blockquote className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Blockquote foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Blockquote style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Blockquote />, {
    context: {
      rebass: {
        Blockquote: {
          marginLeft: 0
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  expect(inner.props().style.marginLeft).toBe(0)
})

test('style props override context styles', () => {
  wrapper = shallow(
    <Blockquote
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Blockquote: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

