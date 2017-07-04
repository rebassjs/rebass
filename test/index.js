import test from 'ava'
import React from 'react'
import {
  isCompositeComponent,
  isElement
} from 'react-dom/test-utils'
import { create as render } from 'react-test-renderer'
import library from '../src'

test('exports an object', t => {
  t.is(typeof library, 'object')
})

Object.keys(library).forEach(key => {
  test(`exports a ${key} component`, t => {
    const Comp = library[key]
    const json = render(<Comp />).toJSON()
    t.snapshot(json)
    // t.true(isCompositeComponent(Comp))
  })
})
