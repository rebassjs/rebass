import React from 'react'
import TestRenderer from 'react-test-renderer'
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Link,
  Image,
  Card,
} from '../src'

const renderJSON = el => TestRenderer.create(el).toJSON()

describe('Box', () => {
  test('renders', () => {
    const json = renderJSON(
      <Box />
    )
    expect(json.type).toBe('div')
  })

  test('renders with as prop', () => {
    const json = renderJSON(
      <Box as='header' />
    )
    expect(json.type).toBe('header')
  })

  test('renders with style props', () => {
    const json = renderJSON(
      <Box width={1} />
    )
    expect(json).toHaveStyleRule('width', '100%')
  })
})

describe('Flex', () => {
  test('renders', () => {
    const json = renderJSON(
      <Flex />
    )
    expect(json.type).toBe('div')
  })

  test('renders with flex props', () => {
    const json = renderJSON(
      <Flex alignItems='center' />
    )
    expect(json).toHaveStyleRule('display', 'flex')
    expect(json).toHaveStyleRule('align-items', 'center')
  })

  test('renders with Box props', () => {
    const json = renderJSON(
      <Flex color='tomato' />
    )
    expect(json).toHaveStyleRule('color', 'tomato')
  })

  test('renders with as and Box props', () => {
    const json = renderJSON(
      <Flex as='footer' color='tomato' />
    )
    expect(json.type).toBe('footer')
    expect(json).toHaveStyleRule('color', 'tomato')
  })
})

describe('Text', () => {
  test('renders', () => {
    const json = renderJSON(
      <Text textAlign='center' fontWeight='bold' />
    )
    expect(json.type).toBe('div')
    expect(json).toHaveStyleRule('text-align', 'center')
    expect(json).toHaveStyleRule('font-weight', 'bold')
  })
})

describe('Heading', () => {
  test('renders', () => {
    const json = renderJSON(
      <Heading />
    )
    expect(json.type).toBe('h2')
    expect(json).toHaveStyleRule('font-size', '24px')
    expect(json).toHaveStyleRule('font-weight', 'bold')
  })
})

describe('Button', () => {
  test('renders', () => {
    const json = renderJSON(
      <Button />
    )
    expect(json.type).toBe('button')
    expect(json).toHaveStyleRule('color', 'white')
    expect(json).toHaveStyleRule('background-color', 'blue')
  })

  test('renders as <a>', () => {
    const json = renderJSON(
      <Button as='a' />
    )
    expect(json.type).toBe('a')
  })
})

describe('Link', () => {
  test('renders', () => {
    const json = renderJSON(
      <Link />
    )
    expect(json.type).toBe('a')
    expect(json).toHaveStyleRule('color', 'blue')
  })
})

describe('Image', () => {
  test('renders', () => {
    const json = renderJSON(
      <Image />
    )
    expect(json.type).toBe('img')
    expect(json).toHaveStyleRule('max-width', '100%')
  })
})

describe('Card', () => {
  test('renders', () => {
    const json = renderJSON(
      <Card
        p={3}
        bg='tomato'
        borderRadius={8}
        boxShadow='0 0 48px tomato'
      />
    )
    expect(json.type).toBe('div')
    expect(json).toHaveStyleRule('padding', '16px')
    expect(json).toHaveStyleRule('background-color', 'tomato')
    expect(json).toHaveStyleRule('border-radius', '8px')
    expect(json).toHaveStyleRule('box-shadow', '0 0 48px tomato')
  })
})
