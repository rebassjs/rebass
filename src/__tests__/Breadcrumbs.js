
import React from 'react'
import { shallow } from 'enzyme'
import { Breadcrumbs } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Breadcrumbs />)
  inner = wrapper.first().shallow()
})

test('defaults to div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Breadcrumbs')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Breadcrumbs className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Breadcrumbs foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Breadcrumbs style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Breadcrumbs />, {
    context: {
      rebass: {
        Breadcrumbs: {
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
    <Breadcrumbs
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Breadcrumbs: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

