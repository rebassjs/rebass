
import React from 'react'
import { shallow } from 'enzyme'
import { Progress } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Progress />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Progress')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Progress className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Progress foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Progress style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Progress />, {
    context: {
      rebass: {
        Progress: {
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
    <Progress
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Progress: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

