
import React from 'react'
import { shallow } from 'enzyme'
import { Group } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Group />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Group')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Group className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Group foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Group style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Group />, {
    context: {
      rebass: {
        Group: {
          color: 'tomato'
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('style props override context styles', () => {
  wrapper = shallow(
    <Group
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Group: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

/*
 * Write tests for child props
 */

