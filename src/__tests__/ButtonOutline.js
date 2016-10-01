
import React from 'react'
import { shallow, mount } from 'enzyme'
import { isDOMComponent } from 'react-addons-test-utils'
import { ButtonOutline, Button } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<ButtonOutline />)
  inner = wrapper.first().shallow()
})

test('is a button', () => {
  expect(inner.is(Button)).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('ButtonOutline')
})

test('accepts custom className props', () => {
  wrapper = shallow(<ButtonOutline className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('ButtonOutline foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<ButtonOutline style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<ButtonOutline />, {
    context: {
      rebass: {
        ButtonOutline: {
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
    <ButtonOutline
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            ButtonOutline: {
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
    <ButtonOutline
      baseRef={r => { button = r }}
    />
  )
  expect(button).toBeDefined()
  expect(isDOMComponent(button)).toBe(true)
})

