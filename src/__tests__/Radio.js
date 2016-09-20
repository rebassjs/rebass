
import React from 'react'
import { shallow } from 'enzyme'
import { Radio, Label } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Radio name='t' label='t' />)
  inner = wrapper.first().shallow()
})

test('is a Label', () => {
  expect(inner.is(Label)).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Radio')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Radio name='t' label='t' className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Radio foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Radio name='t' label='t' style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Radio name='t' label='t' />, {
    context: {
      rebass: {
        Radio: {
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
    <Radio
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

