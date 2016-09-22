
import React from 'react'
import { shallow } from 'enzyme'
import { Label } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Label />)
  inner = wrapper.first().shallow()
})

test('is a label', () => {
  expect(inner.is('label')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Label')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Label className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Label foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Label style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Label />, {
    context: {
      rebass: {
        Label: {
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
    <Label
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Label: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

