
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { withRebass, config } from '../src'

let wrapper
let inner
const Box = ({
  theme,
  subComponentStyles,
  ...props
}) => {
  return <div {...props} />
}
const Base = withRebass(Box)

test('renders', t => {
  t.notThrows(() => {
    wrapper = shallow(<Base />)
    inner = wrapper.first().shallow()
  })
})

test('passes a style object', t => {
  const { style } = inner.props()
  t.is(typeof style, 'object')
  t.deepEqual(style, {
    boxSizing: 'border-box'
  })
})

test('passes a theme object', t => {
  const { theme } = wrapper.props()
  t.is(typeof theme, 'object')
  t.is(typeof theme.colors, 'object')
  t.true(Array.isArray(theme.scale))
})

test('passes a subComponentStyles object', t => {
  const { subComponentStyles } = wrapper.props()
  t.is(typeof subComponentStyles, 'object')
  t.deepEqual(subComponentStyles, {})
})

test('margin props add styles', t => {
  wrapper = shallow(<Base m={1} mb={2} />)
  inner = wrapper.first().shallow()
  const { style } = wrapper.props()
  t.is(style.margin, config.scale[1])
  t.is(style.marginBottom, config.scale[2])
})

test('padding props add styles', t => {
  wrapper = shallow(<Base p={1} pb={2} />)
  inner = wrapper.first().shallow()
  const { style } = wrapper.props()
  t.is(style.padding, config.scale[1])
  t.is(style.paddingBottom, config.scale[2])
})

test('color props add styles', t => {
  wrapper = shallow(<Base color='primary' backgroundColor='black' />)
  inner = wrapper.first().shallow()
  const { style } = wrapper.props()
  t.is(style.color, config.colors.primary)
  t.is(style.backgroundColor, config.colors.black)
  // to do: theme, inverted behaviors
})

test('radii props add styles', t => {
  wrapper = shallow(<Base rounded />)
  inner = wrapper.first().shallow()
  const { style } = wrapper.props()
  t.is(style.borderRadius, config.borderRadius)
})

test('context styles are passed to component', t => {
  wrapper = shallow(<Base />, {
    context: {
      rebass: {
        Box: {
          color: 'tomato'
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  const { style } = wrapper.props()
  t.is(style.color, 'tomato')
})

