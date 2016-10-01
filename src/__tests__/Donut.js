
import React from 'react'
import { shallow } from 'enzyme'
import { Donut } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Donut />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Donut')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Donut className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Donut foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Donut style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Donut />, {
    context: {
      rebass: {
        Donut: {
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
    <Donut
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Donut: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

