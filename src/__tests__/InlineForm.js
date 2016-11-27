
import React from 'react'
import { shallow } from 'enzyme'
import { InlineForm } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<InlineForm name='t' label='t' />)
  inner = wrapper.first().shallow()
})

test('is a form', () => {
  expect(inner.is('form')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('InlineForm')
})

test('accepts custom className props', () => {
  wrapper = shallow(<InlineForm name='t' label='t' className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('InlineForm foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<InlineForm name='t' label='t' style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<InlineForm name='t' label='t' />, {
    context: {
      rebass: {
        InlineForm: {
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
    <InlineForm
      name='t'
      label='t'
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            InlineForm: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

