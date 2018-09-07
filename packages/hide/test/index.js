import 'jest-styled-components'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import Hide from '../src'

const renderJSON = el => TestRenderer.create(el).toJSON()

describe('@rebass/hide', () => {

  test.skip('Mapped renders', () => {
    const json = renderJSON(
      <Mapped
        xsmall
        small
      />
    )
    expect(json.props.display).toEqual([
      'none',
      'none',
      'block',
      'block',
      'block',
    ])
  })

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
    console.log('json', json)
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('display', 'none', {
      // media: 'screen and (min-width:40em)'
    })
  })

})
