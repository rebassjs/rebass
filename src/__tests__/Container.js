
import React from 'react'
import { shallow } from 'enzyme'
import { Container } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Container />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Container')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Container className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Container foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Container style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Container />, {
    context: {
      rebass: {
        Container: {
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
    <Container
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Container: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

