
import React from 'react'
import { shallow } from 'enzyme'
import { Panel } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Panel />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Panel')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Panel className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Panel foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Panel style={{ margin: 12 }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.margin).toBe(12)
})

test('context styles override default styles', () => {
  wrapper = shallow(<Panel />, {
    context: {
      rebass: {
        Panel: {
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
    <Panel
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Panel: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

