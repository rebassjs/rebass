
import React from 'react'
import { shallow } from 'enzyme'
import { CardImage } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<CardImage src='' />)
  inner = wrapper.first().shallow()
})

test('is an img', () => {
  expect(inner.is('img')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('CardImage')
})

test('accepts custom className props', () => {
  wrapper = shallow(<CardImage className='foo' src='' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('CardImage foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<CardImage style={{ color: 'tomato' }} src='' />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<CardImage src='' />, {
    context: {
      rebass: {
        CardImage: {
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
    <CardImage
      color='blue'
      style={{
        color: 'tomato'
      }}
      src='' />, {
        context: {
          rebass: {
            CardImage: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

