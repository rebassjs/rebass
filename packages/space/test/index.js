import React from 'react'
import renderer from 'react-test-renderer'
import Space from '../src'

const render = el => renderer.create(el).toJSON()

test('renders', () => {
  const json = render(<Space />)
  expect(json).toMatchSnapshot()
})

test('renders children', () => {
  const json = render(
    <Space>
      <div>Hello</div>
      <h2>hi</h2>
    </Space>
  )
  expect(json).toMatchSnapshot()
})

test('adds classNames to children', () => {
  const json = render(
    <Space mx={2}>
      <div>Hello</div>
      <h2>hi</h2>
    </Space>
  )
  const { className } = json[0].props
  expect(json[0].props.className.length).toBeGreaterThan(0)
  expect(json[1].props.className).toBe(className)
})

test('merges with existing child classNames', () => {
  const json = render(
    <Space mx={2}>
      <div className='beep'>Hello</div>
      <h2>hi</h2>
    </Space>
  )
  const { className } = json[0].props
  expect(className).toMatch(/^beep\s/)
})
