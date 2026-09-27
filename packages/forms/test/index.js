import React from 'react'
import { render } from '@testing-library/react'
import { matchers } from '@emotion/jest'
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox
} from '../src'

expect.extend(matchers)

const renderJSON = el => render(el).container.firstChild

describe('Label', () => {
  test('renders', () => {
    const json = render(
      <Label />
    ).asFragment()
    expect(json).toMatchSnapshot()
  })
  test('passes ref', () => {
    const ref = React.createRef(null)
    render(
      <Label ref={ref} />
    )
    expect(ref.current.tagName).toBe('LABEL')
  })
})

describe('Input', () => {
  test('renders', () => {
    const json = render(
      <Input />
    ).asFragment()
    expect(json).toMatchSnapshot()
  })
  test('passes ref', () => {
    const ref = React.createRef(null)
    render(
      <Input ref={ref} />
    )
    expect(ref.current.tagName).toBe('INPUT')
  })
})

describe('Select', () => {
  test('renders', () => {
    const json = render(
      <Select />
    ).asFragment()
    expect(json).toMatchSnapshot()
  })
  test('passes ref', () => {
    const ref = React.createRef(null)
    render(
      <Select ref={ref} />
    )
    expect(ref.current.tagName).toBe('SELECT')
  })

  test('margin props are applied to the wrapping element', () => {
    const json = renderJSON(
      <Select mb={3} mt={2} />
    )
    expect(json).toHaveStyleRule('margin-top', '8px')
    expect(json).toHaveStyleRule('margin-bottom', '16px')
  })
})

describe('Textarea', () => {
  test('renders', () => {
    const json = render(
      <Textarea />
    ).asFragment()
    expect(json).toMatchSnapshot()
  })
  test('passes ref', () => {
    const ref = React.createRef(null)
    render(
      <Textarea ref={ref} />
    )
    expect(ref.current.tagName).toBe('TEXTAREA')
  })
})

describe('Radio', () => {
  test('renders', () => {
    const json = render(
      <Radio />
    ).asFragment()
    expect(json).toMatchSnapshot()
  })
  test('passes ref', () => {
    const ref = React.createRef(null)
    render(
      <Radio ref={ref} />
    )
    expect(ref.current.tagName).toBe('INPUT')
    expect(ref.current.type).toBe('radio')
  })
})

describe('Checkbox', () => {
  test('renders', () => {
    const json = render(
      <Checkbox />
    ).asFragment()
    expect(json).toMatchSnapshot()
  })
  test('passes ref', () => {
    const ref = React.createRef(null)
    render(
      <Checkbox ref={ref} />
    )
    expect(ref.current.tagName).toBe('INPUT')
    expect(ref.current.type).toBe('checkbox')
  })
})
