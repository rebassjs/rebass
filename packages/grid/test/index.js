import React from 'react'
import renderer from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import {
  Box,
  Flex,
} from '../src'

expect.extend(matchers)

const render = el => renderer.create(el).toJSON()

describe('Box', () => {
  test('renders', () => {
    const json = render(
      <Box />
    )
    expect(json.type).toBe('div')
  })

  test('renders with as prop', () => {
    const json = render(
      <Box as='header' />
    )
    expect(json.type).toBe('header')
  })

  test('renders with style props', () => {
    const json = render(
      <Box width={1} />
    )
    expect(json).toHaveStyleRule('width', '100%')
  })

  test.todo('renders with sx prop')
  test.todo('renders with layout props')
  test.todo('renders with color props')
  test.todo('renders with typography props')
  test.todo('renders with flexbox props')
  test.todo('renders with box-sizing')
  test.todo('removes style props')
})

describe('Flex', () => {
})
