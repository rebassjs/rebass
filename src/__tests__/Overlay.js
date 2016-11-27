
import React from 'react'
import { shallow } from 'enzyme'
import { Overlay } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Overlay />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Overlay')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Overlay className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Overlay foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Overlay style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(wrapper.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Overlay />, {
    context: {
      rebass: {
        Overlay: {
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
    <Overlay
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Overlay: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(wrapper.props().style.color).toBe('tomato')
})

