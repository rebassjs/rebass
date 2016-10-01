
import React from 'react'
import { shallow } from 'enzyme'
import { Stat } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Stat />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Stat')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Stat className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Stat foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Stat style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Stat />, {
    context: {
      rebass: {
        Stat: {
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
    <Stat
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Stat: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

