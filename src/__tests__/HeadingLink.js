
import React from 'react'
import { shallow } from 'enzyme'
import { HeadingLink, Heading } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<HeadingLink />)
  inner = wrapper.first().shallow()
})

test('is a Heading', () => {
  expect(inner.is(Heading)).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('HeadingLink')
})

test('accepts custom className props', () => {
  wrapper = shallow(<HeadingLink className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('HeadingLink foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<HeadingLink style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<HeadingLink />, {
    context: {
      rebass: {
        HeadingLink: {
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
    <HeadingLink
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            HeadingLink: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

