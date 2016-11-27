
import React from 'react'
import { shallow } from 'enzyme'
import { Heading, theme } from '..'

let wrapper
let inner

const { fontSizes } = theme

test('renders', () => {
  wrapper = shallow(<Heading />)
  inner = wrapper.first().shallow()
})

test('defaults to h2', () => {
  expect(inner.is('h2')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Heading')
})

test('has a default font size', () => {
  expect(inner.props().style.fontSize).toBe(fontSizes[2])
})

test('changes tag when level is set', () => {
  wrapper = shallow(<Heading level={1} />)
  inner = wrapper.first().shallow()
  expect(inner.is('h1')).toBe(true)
  expect(inner.props().style.fontSize).toBe(fontSizes[1])
})

test('changes font size when size is set', () => {
  wrapper = shallow(<Heading size={1} />)
  inner = wrapper.first().shallow()
  expect(inner.is('h2')).toBe(true)
  expect(inner.props().style.fontSize).toBe(fontSizes[1])
})

test('big prop doubles font size', () => {
  wrapper = shallow(<Heading big />)
  inner = wrapper.first().shallow()
  expect(inner.is('h2')).toBe(true)
  expect(inner.props().style.fontSize).toBe(fontSizes[2] * 2)
})

test('alt prop sets alt font styles', () => {
  wrapper = shallow(<Heading alt />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toMatch(/Heading_alt/)
})

test('accepts custom className props', () => {
  wrapper = shallow(<Heading className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Heading foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Heading style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Heading />, {
    context: {
      rebass: {
        Heading: {
          fontWeight: 400
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  expect(inner.props().style.fontWeight).toBe(400)
})

test('style props override context styles', () => {
  wrapper = shallow(<Heading style={{
    color: 'tomato'
  }} />, {
    context: {
      rebass: {
        Heading: {
          color: 'magenta'
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

