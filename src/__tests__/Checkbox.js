
import React from 'react'
import { shallow, mount } from 'enzyme'
import { isDOMComponent } from 'react-addons-test-utils'
import { Checkbox, Label } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Checkbox name='t' label='t' />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is(Label)).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Checkbox')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Checkbox name='t' label='t' className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Checkbox foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(
    <Checkbox
      name='t'
      label='t'
      style={{ margin: 12 }} />
  )
  inner = wrapper.first().shallow()
  expect(inner.props().style.margin).toBe(12)
})

test('context styles override default styles', () => {
  wrapper = shallow(<Checkbox name='t' label='t' />, {
    context: {
      rebass: {
        Checkbox: {
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
    <Checkbox
      name='t'
      label='t'
      m={0}
      style={{
        margin: 12
      }} />, {
        context: {
          rebass: {
            Checkbox: {
              margin: 24
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.margin).toBe(12)
})

test('baseRef returns the input element', () => {
  let input
  wrapper = mount(
    <Checkbox
      name='t'
      label='t'
      baseRef={r => { input = r }}
    />
  )
  expect(input).toBeDefined()
  expect(isDOMComponent(input)).toBe(true)
})

