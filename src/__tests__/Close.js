
import React from 'react'
import { shallow, mount } from 'enzyme'
import { isDOMComponent } from 'react-addons-test-utils'
import { Close } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Close />)
  inner = wrapper.first().shallow()
})

test('is a button', () => {
  expect(inner.is('button')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Close')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Close className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Close foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Close style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Close />, {
    context: {
      rebass: {
        Close: {
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
    <Close
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Close: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('baseRef returns the button element', () => {
  let button
  wrapper = mount(
    <Close
      baseRef={r => { button = r }}
    />
  )
  expect(button).toBeDefined()
  expect(isDOMComponent(button)).toBe(true)
})

