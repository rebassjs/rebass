
import React from 'react'
import { shallow } from 'enzyme'
import { Footer } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Footer />)
  inner = wrapper.first().shallow()
})

test('is a footer', () => {
  expect(inner.is('footer')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Footer')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Footer className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Footer foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Footer style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Footer />, {
    context: {
      rebass: {
        Footer: {
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
    <Footer
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Footer: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

