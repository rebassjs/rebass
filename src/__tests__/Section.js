
import React from 'react'
import { shallow } from 'enzyme'
import { Section } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Section />)
  inner = wrapper.first().shallow()
})

test('is a section', () => {
  expect(inner.is('section')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Section')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Section className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Section foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Section style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Section />, {
    context: {
      rebass: {
        Section: {
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
    <Section
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Section: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

