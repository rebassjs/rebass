import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Position, Relative, Absolute, Fixed, Sticky } from '../src'

const renderJSON = el => TestRenderer.create(el).toJSON()

test('Position renders', () => {
  const json = renderJSON(
    <Position
      position='fixed'
      top='0'
      right='0'
      bottom='0'
      left='0'
      zIndex='1'
    />
  )
  expect(json).toHaveStyleRule('position', 'fixed')
  expect(json).toHaveStyleRule('z-index', '1')
  expect(json).toHaveStyleRule('top', '0')
  expect(json).toHaveStyleRule('right', '0')
  expect(json).toHaveStyleRule('bottom', '0')
  expect(json).toHaveStyleRule('left', '0')
})

test('Relative renders', () => {
  const json = renderJSON(
    <Relative />
  )
  expect(json).toHaveStyleRule('position', 'relative')
})

test('Absolute renders', () => {
  const json = renderJSON(
    <Absolute />
  )
  expect(json).toHaveStyleRule('position', 'absolute')
})

test('Fixed renders', () => {
  const json = renderJSON(
    <Fixed />
  )
  expect(json).toHaveStyleRule('position', 'fixed')
})

test('Sticky renders', () => {
  const json = renderJSON(
    <Sticky />
  )
  expect(json).toHaveStyleRule('position', 'sticky')
})
