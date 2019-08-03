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

  test('renders with layout props', () => {
    const json = render(
      <Box
        display='inline-block'
        height={256}
        maxWidth={768}
      />
    )
    expect(json).toHaveStyleRule('display', 'inline-block')
    expect(json).toHaveStyleRule('height', '256px')
    expect(json).toHaveStyleRule('max-width', '768px')
  })

  test('renders with color props', () => {
    const json = render(
      <Box
        color='tomato'
        bg='black'
      />
    )
    expect(json).toHaveStyleRule('color', 'tomato')
    expect(json).toHaveStyleRule('background-color', 'black')
  })

  test('renders with typography props', () => {
    const json = render(
      <Box
        fontSize={3}
        lineHeight={1.5}
        fontWeight='bold'
        letterSpacing='0.2em'
      />
    )
    expect(json).toHaveStyleRule('font-size', '20px')
    expect(json).toHaveStyleRule('line-height', '1.5')
    expect(json).toHaveStyleRule('font-weight', 'bold')
    expect(json).toHaveStyleRule('letter-spacing', '0.2em')
  })

  test('renders with flexbox props', () => {
    const json = render(
      <Box
        flex='1 1 auto'
        alignSelf='flex-start'
      />
    )
    expect(json).toHaveStyleRule('flex', '1 1 auto')
    expect(json).toHaveStyleRule('align-self', 'flex-start')
  })

  test('renders with box-sizing', () => {
    const json = render(
      <Box />
    )
    expect(json).toHaveStyleRule('box-sizing', 'border-box')
  })

  test('renders with sx prop', () => {
    const json = render(
      <Box
        sx={{
          borderRadius: 2,
          border: '1px solid cyan',
        }}
      />
    )
    expect(json).toHaveStyleRule('border-radius', '2px')
    expect(json).toHaveStyleRule('border', '1px solid cyan')
  })

  test('renders with css prop', () => {
    const json = render(
      <Box
        css={{
          margin: 4,
          padding: 16,
          color: 'tomato',
        }}
      />
    )
    expect(json).toHaveStyleRule('margin', '4px')
    expect(json).toHaveStyleRule('padding', '16px')
    expect(json).toHaveStyleRule('color', 'tomato')
  })

  test('removes style props', () => {
    const json = render(
      <Box
        color='blue'
        fontSize={2}
        width={1}
      />
    )
    expect(Object.keys(json.props)).toEqual([
      'className'
    ])
  })

  test('renders with variants', () => {
    const json = render(
      <Box
        theme={{
          variants: {
            card: {
              p: 4,
              border: '1px solid tomato',
              borderRadius: 2,
            }
          }
        }}
        variant='card'
      />
    )
    expect(json).toHaveStyleRule('padding', '32px')
    expect(json).toHaveStyleRule('border', '1px solid tomato')
    expect(json).toHaveStyleRule('border-radius', '2px')
  })

  test('renders with keyed variants', () => {
    const json = render(
      <Box
        theme={{
          buttons: {
            primary: {
              color: 'white',
              bg: 'tomato',
            }
          }
        }}
        tx='buttons'
        variant='primary'
      />
    )
    expect(json).toHaveStyleRule('color', 'white')
    expect(json).toHaveStyleRule('background-color', 'tomato')
  })

})

describe('Flex', () => {
  test('renders with display flex', () => {
    const json = render(
      <Flex />
    )
    expect(json).toHaveStyleRule('display', 'flex')
  })

  test('renders with Box props', () => {
    const json = render(
      <Flex color='tomato' />
    )
    expect(json).toHaveStyleRule('color', 'tomato')
  })

  test('as prop does not break Box props', () => {
    const json = render(
      <Flex
        as='footer'
        width={1/2}
        fontSize={3}
        color='tomato'
      />
    )
    expect(json.type).toBe('footer')
    expect(json).toHaveStyleRule('width', '50%')
    expect(json).toHaveStyleRule('font-size', '20px')
    expect(json).toHaveStyleRule('color', 'tomato')
  })
})
