import test from 'ava'
import React from 'react'
import {
  isCompositeComponent,
  isElement
} from 'react-dom/test-utils'
import { create as render } from 'react-test-renderer'
import Rebass from '../src'
import {
  Provider,
  hoc,
  theme,
  Tag,
  createLibrary,
  createComponent,
  util
} from '../src'

test('exports an object', t => {
  t.is(typeof Rebass, 'object')
})

Object.keys(Rebass).forEach(key => {
  test(`exports a ${key} component`, t => {
    const Comp = Rebass[key]
    const json = render(<Comp />).toJSON()
    t.snapshot(json)
    t.is(typeof Comp, 'function')
    t.true(isElement(<Comp />))
  })
})

test('Provider renders', t => {
  const json = render(<Provider />).toJSON()
  t.snapshot(json)
})

test('hoc returns a component', t => {
  const Comp = hoc('div')
  const json = render(<Comp />).toJSON()
  t.is(typeof Comp, 'function')
  t.true(isElement(<Comp />))
  t.snapshot(json)
})

test('theme is an object', t => {
  t.is(typeof theme, 'object')
  t.true(Array.isArray(theme.breakpoints))
  t.true(Array.isArray(theme.space))
  t.true(Array.isArray(theme.fontSizes))
  t.true(Array.isArray(theme.weights))
  t.is(typeof theme.colors, 'object')
  t.is(typeof theme.radius, 'number')
  t.is(typeof theme.font, 'string')
  t.is(typeof theme.monospace, 'string')
})

test('createComponent returns null with no config', t => {
  const a = createComponent({})
  t.is(a, null)
})

test('createComponent returns a component', t => {
  const A = createComponent({
    tag: 'div',
    style: {
      color: 'tomato'
    }
  })
  t.true(isElement(<A />))
})

test('util.idx safely gets values', t => {
  const obj = {
    hello: {
      beep: {
        boop: 1
      }
    },
    hi: 'hello'
  }
  const a = util.idx('hello.beep.boop', obj)
  const b = util.idx('hello.not.an.actual.key', obj)
  const c = util.idx('hi', obj)
  t.is(a, 1)
  t.is(b, null)
  t.is(c, 'hello')
})

test('util.px adds px unit to numbers', t => {
  const a = util.px(1)
  const b = util.px('hello')
  t.is(a, '1px')
  t.is(b, 'hello')
})

test('util.color returns a color from the theme', t => {
  const cx = util.color({ theme })
  const a = cx()
  const b = cx('green')
  const c = cx('red', 3)
  const d = cx('pink3')
  const e = cx('teal2', 5)
  t.is(a, theme.colors.blue)
  t.is(b, theme.colors.green)
  t.is(c, theme.colors.red3)
  t.is(d, theme.colors.pink)
  t.is(e, theme.colors.teal5)
})

test('util.darken returns and rgba value', t => {
  const a = util.darken(1/2)
  t.is(a, 'rgba(0, 0, 0, 0.5)')
})

test('util.baseKey gets the base key string', t => {
  const a = util.baseKey('blue2')
  t.is(a, 'blue')
})

test('util.caps returns a caps style object', t => {
  const a = util.caps({ caps: true })
  t.deepEqual(a, {
    textTransform: 'uppercase',
    letterSpacing: '.2em'
  })
})

test('util.align returns text-align values', t => {
  const a = util.align({ left: true })
  const b = util.align({ center: true })
  const c = util.align({ right: true })
  const d = util.align({ justify: true })
  const e = util.align({})
  t.is(a, 'left')
  t.is(b, 'center')
  t.is(c, 'right')
  t.is(d, 'justify')
  t.is(e, null)
})

