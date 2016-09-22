
import React from 'react'
import { shallow } from 'enzyme'
import { Divider } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Divider />)
  inner = wrapper.first().shallow()
})

test('is an hr', () => {
  expect(inner.is('hr')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Divider')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Divider className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Divider foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Divider style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Divider />, {
    context: {
      rebass: {
        Divider: {
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
    <Divider
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Divider: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

