
import React from 'react'
import { shallow } from 'enzyme'
import { Drawer } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Drawer />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Drawer')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Drawer className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Drawer foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Drawer style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(wrapper.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Drawer />, {
    context: {
      rebass: {
        Drawer: {
          marginLeft: 0
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  expect(wrapper.props().style.marginLeft).toBe(0)
})

test('style props override context styles', () => {
  wrapper = shallow(
    <Drawer
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Drawer: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(wrapper.props().style.color).toBe('tomato')
})

