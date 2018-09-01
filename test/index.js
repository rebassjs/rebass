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

const renderJSON = el => render(el).toJSON()

const fixtures = {
  'Text bold': <Rebass.Text fontWeight='bold' />,
  'Border top': <Rebass.Border borderTop={1} />,
  'Border right': <Rebass.Border borderRight={1} />,
  'Border bottom': <Rebass.Border borderBottom={1} />,
  'Border left': <Rebass.Border borderLeft={1} />,
  'Border 2': <Rebass.Border border={2} />,
  'Border none': <Rebass.Border border='none' />,
  'Banner src': <Rebass.Banner backgroundImage='url(hello.png)' />,
  'Banner src': <Rebass.Banner backgroundImage='url(hello.png)' />,
  'Drawer open': <Rebass.Drawer open />,
  'Drawer side top': <Rebass.Drawer side='top' />,
  'Drawer side right': <Rebass.Drawer side='right' />,
  'Drawer side bottom': <Rebass.Drawer side='bottom' />,
  'Drawer side left': <Rebass.Drawer side='left' />,
  'Drawer open side top': <Rebass.Drawer open side='top' />,
  'Drawer open side right': <Rebass.Drawer open side='right' />,
  'Drawer open side bottom': <Rebass.Drawer open side='bottom' />,
  'Drawer open side left': <Rebass.Drawer open side='left' />,
  'Drawer width': <Rebass.Drawer width={128} />,
  'Drawer height': <Rebass.Drawer height={128} />,
  'Carousel index 2': <Rebass.Carousel index={2} />,
  'Arrow up': <Rebass.Arrow direction='up' />,
  'Embed ratio': <Rebass.Embed ratio={1/2} />,
  'Switch checked': <Rebass.Switch checked />,
  'BackgroundImage': <Rebass.BackgroundImage backgroundImage='url(hello.png)' />,
}

const examples = Object.keys(fixtures).map(name => ({
  name,
  element: fixtures[name]
}))

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

examples.forEach(({ name, element }) => (
  test(`${name} renders`, () => {
    const json = renderJSON(element)
    expect(json).toMatchSnapshot()
  })
))

test('invertTheme adjusts colors', () => {
  const next = Rebass.invertTheme(Rebass.theme)
  expect(next.space).toEqual(Rebass.theme.space)
  expect(next.colors).not.toEqual(Rebass.theme.colors)
})

test('invertTheme handles themes without colors', () => {
  const next = Rebass.invertTheme({ space: [ 4, 8, 16 ] })
  expect(next.space).toEqual([ 4, 8, 16 ])
  expect(next.colors).toEqual({})
})
