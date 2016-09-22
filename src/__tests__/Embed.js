
import React from 'react'
import { shallow } from 'enzyme'
import { Embed } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Embed />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Embed')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Embed className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Embed foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Embed style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Embed />, {
    context: {
      rebass: {
        Embed: {
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
    <Embed
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Embed: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

