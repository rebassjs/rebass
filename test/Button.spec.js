
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Button } from '../src'

const renderer = TestUtils.createRenderer()

describe('Button', () => {
  it('should render', () => {
    renderer.render(<Button />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toEqual('button')
  })

})

