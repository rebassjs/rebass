
import React from 'react'
import { shallow } from 'enzyme'
import { SectionHeader } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<SectionHeader />)
  inner = wrapper.first().shallow()
})

test('is a header', () => {
  expect(inner.is('header')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('SectionHeader')
})

test('accepts custom className props', () => {
  wrapper = shallow(<SectionHeader className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('SectionHeader foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<SectionHeader style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<SectionHeader />, {
    context: {
      rebass: {
        SectionHeader: {
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
    <SectionHeader
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            SectionHeader: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

