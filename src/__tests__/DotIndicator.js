
import React from 'react'
import { shallow } from 'enzyme'
import { DotIndicator } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<DotIndicator />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('DotIndicator')
})

test('accepts custom className props', () => {
  wrapper = shallow(<DotIndicator className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('DotIndicator foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<DotIndicator style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<DotIndicator />, {
    context: {
      rebass: {
        DotIndicator: {
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
    <DotIndicator
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            DotIndicator: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

