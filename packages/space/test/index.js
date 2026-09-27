import React from 'react'
import { render } from '@testing-library/react'
import Space from '../src'

test('renders', () => {
  const json = render(<Space />).asFragment()
  expect(json).toMatchSnapshot()
})

test('renders children', () => {
  const json = render(
    <Space>
      <div>Hello</div>
      <h2>hi</h2>
    </Space>
  ).asFragment()
  expect(json).toMatchSnapshot()
})

test('adds classNames to children', () => {
  const { container } = render(
    <Space mx={2}>
      <div>Hello</div>
      <h2>hi</h2>
    </Space>
  )
  const [firstChild, secondChild] = container.children
  expect(firstChild.className.length).toBeGreaterThan(0)
  expect(secondChild.className).toBe(firstChild.className)
})

test('merges with existing child classNames', () => {
  const { container } = render(
    <Space mx={2}>
      <div className='beep'>Hello</div>
      <h2>hi</h2>
    </Space>
  )
  const [firstChild] = container.children
  expect(firstChild.className).toMatch(/^beep\s/)
})
