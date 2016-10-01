
import React from 'react'
import { shallow, mount } from 'enzyme'
import { isDOMComponent } from 'react-addons-test-utils'
import { ButtonCircle, Button } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<ButtonCircle />)
  inner = wrapper.first().shallow()
})

test('is a button', () => {
  expect(inner.is(Button)).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('ButtonCircle')
})

test('accepts custom className props', () => {
  wrapper = shallow(<ButtonCircle className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('ButtonCircle foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<ButtonCircle style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<ButtonCircle />, {
    context: {
      rebass: {
        ButtonCircle: {
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
    <ButtonCircle
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            ButtonCircle: {
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
    <ButtonCircle
      baseRef={r => { button = r }}
    />
  )
  expect(button).toBeDefined()
  expect(isDOMComponent(button)).toBe(true)
})

