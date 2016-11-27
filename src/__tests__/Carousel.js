
import React from 'react'
import { shallow } from 'enzyme'
import { Carousel } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Carousel />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Carousel')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Carousel className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Carousel foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Carousel style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Carousel />, {
    context: {
      rebass: {
        Carousel: {
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
    <Carousel
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Carousel: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

