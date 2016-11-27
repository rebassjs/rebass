
import React from 'react'
import { shallow } from 'enzyme'
import { withRebass, theme as defaultTheme } from '..'
import { getSubComponentStyles } from '../withRebass'

const { scale, colors, borderRadius } = defaultTheme

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
Box._name = 'Box'
const Base = withRebass(Box)

test('renders', () => {
  expect(() => {
    wrapper = shallow(<Base />)
    inner = wrapper.first().shallow()
  }).not.toThrow()
})

test('passes a style object', () => {
  const { style } = inner.props()
  expect(typeof style).toBe('object')
  expect(style).toEqual({
    boxSizing: 'border-box',
    color: 'green',
    fill: {}
  })
})

test('passes a theme object', () => {
  const { theme } = wrapper.props()
  expect(typeof theme).toBe('object')
  expect(typeof theme.colors).toBe('object')
  expect(Array.isArray(theme.scale)).toBe(true)
})

test('passes a subComponentStyles object', () => {
  const { subComponentStyles } = wrapper.props()
  expect(typeof subComponentStyles).toBe('object')
  expect(subComponentStyles).toEqual({})
})

test('margin props add styles', () => {
  wrapper = shallow(<Base m={1} mb={2} />)
  inner = wrapper.first().shallow()
  const { style } = wrapper.props()
  expect(style.margin).toBe(scale[1])
  expect(style.marginBottom).toBe(scale[2])
})

test('padding props add styles', () => {
  wrapper = shallow(<Base p={1} pb={2} />)
  inner = wrapper.first().shallow()
  const { style } = wrapper.props()
  expect(style.padding).toBe(scale[1])
  expect(style.paddingBottom).toBe(scale[2])
})

test('color props add styles', () => {
  wrapper = shallow(
    <Base
      color='primary'
      backgroundColor='black'
      theme='primary'
    />
  )
  inner = wrapper.first().shallow()
  const { style } = wrapper.props()
  expect(style.color).toBe(colors.primary)
  expect(style.backgroundColor).toBe(colors.black)
  expect(style.fill.color).toBe(colors.white)
  expect(style.fill.backgroundColor).toBe(colors.primary)
})

test('radii props add styles', () => {
  wrapper = shallow(<Base rounded />)
  inner = wrapper.first().shallow()
  const { style } = wrapper.props()
  expect(style.borderRadius).toBe(borderRadius)
})

test('context styles are passed to component', () => {
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
  expect(style.color).toBe('tomato')
})

test('context styles override default styles', () => {
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
  expect(style.color).toBe('tomato')
})

test('prop styles override default and context styles', () => {
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
  expect(style.color).toBe(colors.blue)
})

test('inline styles override default, context, and prop styles', () => {
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
  expect(style.color).toBe('black')
})

test('getSubcomponentStyles parses out nested objects', () => {
  const styles = getSubComponentStyles({
    color: 'tomato',
    foo: {
      color: 'blue'
    }
  }, {
    color: 'green',
    foo: {
      margin: 16
    },
    bar: {
      color: 'magenta'
    }
  }, {
    color: 'black'
  })
  const styleKeys = Object.keys(styles)
  expect(styleKeys.length).toBe(2)
  expect(styles.foo).toEqual({
    color: 'blue',
    margin: 16
  })
  expect(styles.bar).toEqual({
    color: 'magenta'
  })
})
