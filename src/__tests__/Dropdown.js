
import React from 'react'
import { shallow } from 'enzyme'
import { Dropdown } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Dropdown />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Dropdown')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Dropdown className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Dropdown foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Dropdown style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Dropdown />, {
    context: {
      rebass: {
        Dropdown: {
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
    <Dropdown
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Dropdown: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

