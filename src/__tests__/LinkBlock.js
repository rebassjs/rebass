
import React from 'react'
import { shallow } from 'enzyme'
import { LinkBlock } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<LinkBlock />)
  inner = wrapper.first().shallow()
})

test('is a link', () => {
  expect(inner.is('a')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('LinkBlock')
})

test('accepts custom className props', () => {
  wrapper = shallow(<LinkBlock className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('LinkBlock foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<LinkBlock style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<LinkBlock />, {
    context: {
      rebass: {
        LinkBlock: {
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
    <LinkBlock
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            LinkBlock: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

