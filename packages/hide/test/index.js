import React from 'react'
import TestRenderer from 'react-test-renderer'
import Hide, { map } from '../src'

const renderJSON = el => TestRenderer.create(el).toJSON()

describe('@rebass/hide', () => {
  test('Hide renders with display prop', () => {
    const json = renderJSON(
      <Hide
        display={[
          'block', 'none',
        ]}
      />
    )
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('display', 'block')
    expect(json).toHaveStyleRule('display', 'none', {
      media: 'screen and (min-width:40em)'
    })
  })

  test('Hide renders with shorthand props', () => {
    const json = renderJSON(
      <Hide small />
    )
    expect(json).toHaveStyleRule('display', 'block')
    expect(json).toMatchSnapshot()
  })

  test('map converts shorthand props to display', () => {
    const props = map({
      small: true
    })
    expect(props.display[0]).toBe('block')
    expect(props.display[1]).toBe('none')

  })
})
