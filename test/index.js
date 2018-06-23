import 'jest-styled-components'
import React from 'react'
import { isCompositeComponent, isElement } from 'react-dom/test-utils'
import { create as render } from 'react-test-renderer'
import * as Rebass from '../src'
import { Provider, theme } from '../src'

import {
  __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS
} from 'styled-components'

const { StyleSheet } = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS

const examples = [
]

afterEach(() => {
  StyleSheet.reset()
})

test('exports an object', () => {
  expect(typeof Rebass).toBe('object')
})

const blacklist = [
  'theme',
  'colors',
  'createColors',
  'invertTheme',
]

Object.keys(Rebass)
  .filter(key => !blacklist.includes(key))
  .filter(key => typeof Rebass[key] === 'function')
  .forEach(key => {
  test(`exports a ${key} component`, () => {
    const Comp = Rebass[key]
    const json = render(<Comp />).toJSON()
    expect(json).toMatchSnapshot()
    expect(typeof Comp).toBe('function')
    expect(isElement(<Comp />)).toBe(true)
  })
})

test('Provider renders', () => {
  const json = render(<Provider />).toJSON()
  expect(json).toMatchSnapshot()
})

test('Provider renders with custom theme', () => {
  const json = render(<Provider
    theme={{
      fonts: [],
      fontSizes: [
        12, 16, 18, 24, 36, 48, 72
      ],
      space: [
        0, 6, 12, 18, 24, 30, 36
      ]
    }}
  />).toJSON()
  expect(json).toMatchSnapshot()
})

test('theme is an object', () => {
  expect(typeof theme).toBe('object')
  expect(Array.isArray(theme.breakpoints)).toBe(true)
  expect(Array.isArray(theme.space)).toBe(true)
  expect(Array.isArray(theme.fontSizes)).toBe(true)
  expect(typeof theme.fontWeights).toBe('object')
  expect(typeof theme.colors).toBe('object')
  expect(typeof theme.radii).toBe('object')
  expect(typeof theme.fonts).toBe('object')
})

test.skip('renders NavLink active', () => {
  const json = render(<Rebass.NavLink active />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Text bold', () => {
  const json = render(<Rebass.Text fontWeight='bold' />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Border top', () => {
  const json = render(<Rebass.Border borderTop={1} />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Border right', () => {
  const json = render(<Rebass.Border borderRight={1} />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Border bottom', () => {
  const json = render(<Rebass.Border borderBottom={1} />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Border left', () => {
  const json = render(<Rebass.Border borderLeft={1} />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Border border 2', () => {
  const json = render(<Rebass.Border border={2} />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Border none', () => {
  const json = render(<Rebass.Border border='none' />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Banner backgroundImage', () => {
  const json = render(<Rebass.Banner src='hello.png' />).toJSON()
  expect(json).toMatchSnapshot()
})

test.skip('renders TabItem active', () => {
  const json = render(<Rebass.TabItem active />).toJSON()
  expect(json).toMatchSnapshot()
})

test.skip('renders DotButton active', () => {
  const json = render(<Rebass.DotButton active />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Drawer open', () => {
  const json = render(<Rebass.Drawer open />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Drawer side top', () => {
  const json = render(<Rebass.Drawer side='top' />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Drawer side right', () => {
  const json = render(<Rebass.Drawer side='right' />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Drawer side bottom', () => {
  const json = render(<Rebass.Drawer side='bottom' />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Drawer side left', () => {
  const json = render(<Rebass.Drawer side='left' />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Drawer open side top', () => {
  const json = render(<Rebass.Drawer open side='top' />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Drawer open side right', () => {
  const json = render(<Rebass.Drawer open side='right' />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Drawer open side bottom', () => {
  const json = render(<Rebass.Drawer open side='bottom' />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Drawer open side left', () => {
  const json = render(<Rebass.Drawer open side='left' />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Drawer size', () => {
  const json = render(<Rebass.Drawer size={128} />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Carousel index', () => {
  const json = render(<Rebass.Carousel index={2} />).toJSON()
  expect(json).toMatchSnapshot()
})

test.skip('renders Star checked', () => {
  const json = render(<Rebass.Star checked />).toJSON()
  expect(json).toMatchSnapshot()
})

test.skip('renders Star half', () => {
  const json = render(<Rebass.Star half />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Arrow up', () => {
  const json = render(<Rebass.Arrow direction='up' />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Embed ratio', () => {
  const json = render(<Rebass.Embed ratio={1/2} />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders Switch checked', () => {
  const json = render(<Rebass.Switch checked />).toJSON()
  expect(json).toMatchSnapshot()
})

test('renders BackgroundImage src', () => {
  const json = render(<Rebass.BackgroundImage src='hello.png' />).toJSON()
  expect(json).toMatchSnapshot()
})

test('invertTheme adjusts colors', () => {
  const next = Rebass.invertTheme(Rebass.theme)
  expect(next.space).toEqual(Rebass.theme.space)
  expect(next.colors).not.toEqual(Rebass.theme.colors)
})
