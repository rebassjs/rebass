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

test('Provider renders with custom theme', t => {
  const json = render(<Provider
    theme={{
      font: null, // 'monospace',
      fontSizes: [
        12, 16, 18, 24, 36, 48, 72
      ],
      space: [
        0, 6, 12, 18, 24, 30, 36
      ]
    }}
  />).toJSON()
  t.snapshot(json)
})

test('hoc returns a component', t => {
  const Comp = hoc()('div')
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
  const c = cx('red3')
  const d = cx('pink3')
  const e = cx('teal5')
  t.is(a, theme.colors.blue)
  t.is(b, theme.colors.green)
  t.is(c, theme.colors.red3)
  t.is(d, theme.colors.pink3)
  t.is(e, theme.colors.teal5)
})

test('util.darken returns and rgba value', t => {
  const a = util.darken(1/2)
  t.is(a, 'rgba(0, 0, 0, 0.5)')
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
  t.deepEqual(a, { textAlign: 'left' })
  t.deepEqual(b, { textAlign: 'center' })
  t.deepEqual(c, { textAlign: 'right' })
  t.deepEqual(d, { textAlign: 'justify' })
  t.deepEqual(e, null)
})

test('renders NavLink active', t => {
  const json = render(<Rebass.NavLink active />).toJSON()
  t.snapshot(json)
})

test('renders Text bold', t => {
  const json = render(<Rebass.Text bold />).toJSON()
  t.snapshot(json)
})

test('renders Border top', t => {
  const json = render(<Rebass.Border top />).toJSON()
  t.snapshot(json)
})

test('renders Border right', t => {
  const json = render(<Rebass.Border right />).toJSON()
  t.snapshot(json)
})

test('renders Border bottom', t => {
  const json = render(<Rebass.Border bottom />).toJSON()
  t.snapshot(json)
})

test('renders Border left', t => {
  const json = render(<Rebass.Border left />).toJSON()
  t.snapshot(json)
})

test('renders Border borderWidth', t => {
  const json = render(<Rebass.Border borderWidth={2} />).toJSON()
  t.snapshot(json)
})

test('renders Banner backgroundImage', t => {
  const json = render(<Rebass.Banner backgroundImage='hello.png' />).toJSON()
  t.snapshot(json)
})

test('renders TabItem active', t => {
  const json = render(<Rebass.TabItem active />).toJSON()
  t.snapshot(json)
})

test('renders DotButton active', t => {
  const json = render(<Rebass.DotButton active />).toJSON()
  t.snapshot(json)
})

test('renders Absolute top', t => {
  const json = render(<Rebass.Absolute top />).toJSON()
  t.snapshot(json)
})

test('renders Absolute right', t => {
  const json = render(<Rebass.Absolute right />).toJSON()
  t.snapshot(json)
})

test('renders Absolute bottom', t => {
  const json = render(<Rebass.Absolute bottom />).toJSON()
  t.snapshot(json)
})

test('renders Absolute left', t => {
  const json = render(<Rebass.Absolute left />).toJSON()
  t.snapshot(json)
})

test('renders Fixed top', t => {
  const json = render(<Rebass.Fixed top />).toJSON()
  t.snapshot(json)
})

test('renders Fixed right', t => {
  const json = render(<Rebass.Fixed right />).toJSON()
  t.snapshot(json)
})

test('renders Fixed bottom', t => {
  const json = render(<Rebass.Fixed bottom />).toJSON()
  t.snapshot(json)
})

test('renders Fixed left', t => {
  const json = render(<Rebass.Fixed left />).toJSON()
  t.snapshot(json)
})

test('renders Sticky top', t => {
  const json = render(<Rebass.Sticky top />).toJSON()
  t.snapshot(json)
})

test('renders Sticky right', t => {
  const json = render(<Rebass.Sticky right />).toJSON()
  t.snapshot(json)
})

test('renders Sticky bottom', t => {
  const json = render(<Rebass.Sticky bottom />).toJSON()
  t.snapshot(json)
})

test('renders Sticky left', t => {
  const json = render(<Rebass.Sticky left />).toJSON()
  t.snapshot(json)
})

test('renders Drawer open', t => {
  const json = render(<Rebass.Drawer open />).toJSON()
  t.snapshot(json)
})

test('renders Drawer position top', t => {
  const json = render(<Rebass.Drawer position='top' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer position right', t => {
  const json = render(<Rebass.Drawer position='right' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer position bottom', t => {
  const json = render(<Rebass.Drawer position='bottom' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer position left', t => {
  const json = render(<Rebass.Drawer position='left' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer open position top', t => {
  const json = render(<Rebass.Drawer open position='top' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer open position right', t => {
  const json = render(<Rebass.Drawer open position='right' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer open position bottom', t => {
  const json = render(<Rebass.Drawer open position='bottom' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer open position left', t => {
  const json = render(<Rebass.Drawer open position='left' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer size', t => {
  const json = render(<Rebass.Drawer size={128} />).toJSON()
  t.snapshot(json)
})

test('renders Carousel index', t => {
  const json = render(<Rebass.Carousel index={2} />).toJSON()
  t.snapshot(json)
})

test('renders Star checked', t => {
  const json = render(<Rebass.Star checked />).toJSON()
  t.snapshot(json)
})

test('renders Star half', t => {
  const json = render(<Rebass.Star half />).toJSON()
  t.snapshot(json)
})

test('renders Arrow up', t => {
  const json = render(<Rebass.Arrow up />).toJSON()
  t.snapshot(json)
})

test('renders Embed ratio', t => {
  const json = render(<Rebass.Embed ratio={1/2} />).toJSON()
  t.snapshot(json)
})

test('renders Switch checked', t => {
  const json = render(<Rebass.Switch checked />).toJSON()
  t.snapshot(json)
})

test('renders BackgroundImage src', t => {
  const json = render(<Rebass.BackgroundImage src='hello.png' />).toJSON()
  t.snapshot(json)
})
