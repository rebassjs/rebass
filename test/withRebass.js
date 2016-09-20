
import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import { withRebass, theme } from '../src'

let wrapper
let inner
const Box = ({
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const sx = {
    color: 'green',
    ...style
  }
  return <div {...props} style={sx} />
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
    boxSizing: 'border-box',
    color: 'green'
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
  t.is(style.margin, theme.scale[1])
  t.is(style.marginBottom, theme.scale[2])
})

test('padding props add styles', t => {
  wrapper = shallow(<Base p={1} pb={2} />)
  inner = wrapper.first().shallow()
  const { style } = wrapper.props()
  t.is(style.padding, theme.scale[1])
  t.is(style.paddingBottom, theme.scale[2])
})

test('color props add styles', t => {
  wrapper = shallow(<Base color='primary' backgroundColor='black' />)
  inner = wrapper.first().shallow()
  const { style } = wrapper.props()
  t.is(style.color, theme.colors.primary)
  t.is(style.backgroundColor, theme.colors.black)
  // to do: theme, inverted behaviors
})

test('radii props add styles', t => {
  wrapper = shallow(<Base rounded />)
  inner = wrapper.first().shallow()
  const { style } = wrapper.props()
  t.is(style.borderRadius, theme.borderRadius)
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
  const { style } = inner.props()
  t.is(style.color, 'tomato')
})

test('context styles override default styles', t => {
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

test('prop styles override default and context styles', t => {
  wrapper = shallow(<Base color='blue' />, {
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
  t.is(style.color, theme.colors.blue)
})

test('inline styles override default, context, and prop styles', t => {
  wrapper = shallow(
    <Base
      color='blue'
      style={{
        color: 'black'
      }}
    />
    , {
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
  t.is(style.color, 'black')
})

