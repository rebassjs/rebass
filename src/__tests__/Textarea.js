
import React from 'react'
import { shallow, mount } from 'enzyme'
import { isDOMComponent } from 'react-addons-test-utils'
import { Textarea } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Textarea name='t' label='t' />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Textarea')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Textarea name='t' label='t' className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Textarea foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Textarea name='t' label='t' style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Textarea name='t' label='t' />, {
    context: {
      rebass: {
        Textarea: {
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
    <Textarea
      name='t'
      label='t'
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Arros: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('baseRef returns the textarea element', () => {
  let textarea
  wrapper = mount(
    <Textarea
      name='t'
      label='t'
      baseRef={r => { textarea = r }}
    />
  )
  expect(textarea).toBeDefined()
  expect(isDOMComponent(textarea)).toBe(true)
})

