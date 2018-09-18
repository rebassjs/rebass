import React from 'react'
import TestRenderer from 'react-test-renderer'
import Hide from '../src'

const renderJSON = el => TestRenderer.create(el).toJSON()

test('Hide renders', () => {
  const json = renderJSON(
    <Hide
      xsmall
      small
      medium
      large
      xlarge
    />
  )

  expect(json).toMatchSnapshot()
  expect(json).toHaveStyleRule('display', 'none')
})
