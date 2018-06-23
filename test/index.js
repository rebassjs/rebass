import test from 'ava'
import React from 'react'
import { isCompositeComponent, isElement } from 'react-dom/test-utils'
import { create as render } from 'react-test-renderer'
import * as Rebass from '../src'
import { Provider, theme } from '../src'

// import snapshot from '@compositor/kit-snapshot'
// import * as examples from '../demo'

import {
  __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS
} from 'styled-components'

const { StyleSheet } = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS

test.afterEach(() => {
  StyleSheet.reset()
})

test('exports an object', t => {
  t.is(typeof Rebass, 'object')
})

Object.keys(Rebass)
  .filter(key => typeof Rebass[key] === 'function')
  .forEach(key => {
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
      fonts: [],
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

test('theme is an object', t => {
  t.is(typeof theme, 'object')
  t.true(Array.isArray(theme.breakpoints))
  t.true(Array.isArray(theme.space))
  t.true(Array.isArray(theme.fontSizes))
  t.is(typeof theme.fontWeights, 'object')
  t.is(typeof theme.colors, 'object')
  t.is(typeof theme.radii, 'object')
  t.is(typeof theme.fonts, 'object')
})

test.skip('renders NavLink active', t => {
  const json = render(<Rebass.NavLink active />).toJSON()
  t.snapshot(json)
})

test('renders Text bold', t => {
  const json = render(<Rebass.Text fontWeight='bold' />).toJSON()
  t.snapshot(json)
})

test('renders Border top', t => {
  const json = render(<Rebass.Border borderTop={1} />).toJSON()
  t.snapshot(json)
})

test('renders Border right', t => {
  const json = render(<Rebass.Border borderRight={1} />).toJSON()
  t.snapshot(json)
})

test('renders Border bottom', t => {
  const json = render(<Rebass.Border borderBottom={1} />).toJSON()
  t.snapshot(json)
})

test('renders Border left', t => {
  const json = render(<Rebass.Border borderLeft={1} />).toJSON()
  t.snapshot(json)
})

test('renders Border border 2', t => {
  const json = render(<Rebass.Border border={2} />).toJSON()
  t.snapshot(json)
})

test('renders Border none', t => {
  const json = render(<Rebass.Border border='none' />).toJSON()
  t.snapshot(json)
})

test('renders Banner backgroundImage', t => {
  const json = render(<Rebass.Banner src='hello.png' />).toJSON()
  t.snapshot(json)
})

test.skip('renders TabItem active', t => {
  const json = render(<Rebass.TabItem active />).toJSON()
  t.snapshot(json)
})

test.skip('renders DotButton active', t => {
  const json = render(<Rebass.DotButton active />).toJSON()
  t.snapshot(json)
})

/*
  test('renders Absolute top', t => {
    const json = render(<Rebass.Absolute top={0} />).toJSON()
    t.snapshot(json)
  })

  test('renders Absolute right', t => {
    const json = render(<Rebass.Absolute right={0} />).toJSON()
    t.snapshot(json)
  })

  test('renders Absolute bottom', t => {
    const json = render(<Rebass.Absolute bottom={0} />).toJSON()
    t.snapshot(json)
  })

  test('renders Absolute left', t => {
    const json = render(<Rebass.Absolute left={0} />).toJSON()
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
*/

test('renders Drawer open', t => {
  const json = render(<Rebass.Drawer open />).toJSON()
  t.snapshot(json)
})

test('renders Drawer side top', t => {
  const json = render(<Rebass.Drawer side='top' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer side right', t => {
  const json = render(<Rebass.Drawer side='right' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer side bottom', t => {
  const json = render(<Rebass.Drawer side='bottom' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer side left', t => {
  const json = render(<Rebass.Drawer side='left' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer open side top', t => {
  const json = render(<Rebass.Drawer open side='top' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer open side right', t => {
  const json = render(<Rebass.Drawer open side='right' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer open side bottom', t => {
  const json = render(<Rebass.Drawer open side='bottom' />).toJSON()
  t.snapshot(json)
})

test('renders Drawer open side left', t => {
  const json = render(<Rebass.Drawer open side='left' />).toJSON()
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

test.skip('renders Star checked', t => {
  const json = render(<Rebass.Star checked />).toJSON()
  t.snapshot(json)
})

test.skip('renders Star half', t => {
  const json = render(<Rebass.Star half />).toJSON()
  t.snapshot(json)
})

test('renders Arrow up', t => {
  const json = render(<Rebass.Arrow direction='up' />).toJSON()
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
