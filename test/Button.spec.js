
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Button } from '../src'

const renderer = TestUtils.createRenderer()

describe('Button', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Button />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('button')
  })

})

