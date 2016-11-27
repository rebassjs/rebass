
import React from 'react'
import { shallow } from 'enzyme'
import { Banner } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Banner />)
  inner = wrapper.first().shallow()
})

test('defaults to div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Banner')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Banner className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Banner foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Banner style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Banner />, {
    context: {
      rebass: {
        Banner: {
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
    <Banner
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Banner: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

