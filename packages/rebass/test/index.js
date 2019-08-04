import React from 'react'
import renderer from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import {
  Text,
  Heading,
  Button,
  Link,
  Image,
  Card,
} from '../src'

expect.extend(matchers)

const render = el => renderer.create(el).toJSON()

describe('Text', () => {
  test('renders', () => {
    const json = render(
      <Text textAlign='center' fontWeight='bold' fontStyle='italic' />
    )
    expect(json.type).toBe('div')
    expect(json).toHaveStyleRule('text-align', 'center')
    expect(json).toHaveStyleRule('font-weight', 'bold')
    expect(json).toHaveStyleRule('font-style', 'italic')
  })

  test('renders with text variants', () => {
    const json = render(
      <Text
        theme={{
          text: {
            caps: {
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }
          }
        }}
        variant='caps'
      />
    )
    expect(json).toHaveStyleRule('text-transform', 'uppercase')
    expect(json).toHaveStyleRule('letter-spacing', '0.2em')
  })
})

describe('Heading', () => {
  test('renders', () => {
    const json = render(
      <Heading />
    )
    expect(json.type).toBe('h2')
    expect(json).toHaveStyleRule('font-size', '24px')
    expect(json).toHaveStyleRule('font-weight', 'heading')
  })

  test('renders with text variants', () => {
    const json = render(
      <Heading
        theme={{
          text: {
            display: {
              fontSize: 64,
              fontWeight: 900,
            }
          }
        }}
        variant='display'
      />
    )
    expect(json).toHaveStyleRule('font-size', '64px')
    expect(json).toHaveStyleRule('font-weight', '900')
  })
})

describe('Button', () => {
  test('renders', () => {
    const json = render(
      <Button />
    )
    expect(json.type).toBe('button')
    expect(json).toHaveStyleRule('color', 'white')
    expect(json).toHaveStyleRule('background-color', 'primary')
  })

  test('renders as <a>', () => {
    const json = render(
      <Button as='a' />
    )
    expect(json.type).toBe('a')
  })
})

describe('Link', () => {
  test('renders', () => {
    const json = render(
      <Link />
    )
    expect(json.type).toBe('a')
  })

  test('renders with theme', () => {
    const json = render(
      <Link
        theme={{
          variants: {
            link: {
              color: 'primary',
            }
          }
        }}
      />
    )
    expect(json).toHaveStyleRule('color', 'primary')
  })
})

describe('Image', () => {
  test('renders', () => {
    const json = render(
      <Image />
    )
    expect(json.type).toBe('img')
    expect(json).toHaveStyleRule('max-width', '100%')
  })
})

describe('Card', () => {
  test('renders', () => {
    const json = render(
      <Card
        p={3}
        bg='tomato'
        sx={{
          borderRadius: 8,
          boxShadow: '0 0 48px tomato',
        }}
      />
    )
    expect(json.type).toBe('div')
    expect(json).toHaveStyleRule('padding', '16px')
    expect(json).toHaveStyleRule('background-color', 'tomato')
    expect(json).toHaveStyleRule('border-radius', '8px')
    expect(json).toHaveStyleRule('box-shadow', '0 0 48px tomato')
  })

  test('renders with default variant', () => {
    const json = render(
      <Card
        theme={{
          variants: {
            card: {
              p: 3,
              bg: 'tomato',
              borderRadius: 4,
            }
          }
        }}
      />
    )
    expect(json).toHaveStyleRule('padding', '16px')
    expect(json).toHaveStyleRule('background-color', 'tomato')
    expect(json).toHaveStyleRule('border-radius', '4px')
  })
})
