
import React from 'react'
import { shallow, mount } from 'enzyme'
import { isDOMComponent } from 'react-addons-test-utils'
import { Button } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Button />)
  inner = wrapper.first().shallow()
})

test('is a button', () => {
  expect(inner.is('button')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Button')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Button className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Button foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Button style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Button />, {
    context: {
      rebass: {
        Button: {
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
    <Button
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Button: {
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
    <Button
      baseRef={r => { button = r }}
    />
  )
  expect(button).toBeDefined()
  expect(isDOMComponent(button)).toBe(true)
})

