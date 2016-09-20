
import React from 'react'
import { shallow } from 'enzyme'
import { SequenceMap, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', () => {
  wrapper = shallow(<SequenceMap />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('SequenceMap')
})

test('accepts custom className props', () => {
  wrapper = shallow(<SequenceMap className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('SequenceMap foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<SequenceMap style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<SequenceMap />, {
    context: {
      rebass: {
        SequenceMap: {
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
    <SequenceMap
      color='blue'
      style={{
      color: 'tomato'
    }} />, {
    context: {
      rebass: {
        Arros: {
          color: 'magenta'
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

