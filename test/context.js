
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Button, Panel } from '../src'

const renderer = TestUtils.createRenderer()

describe('React context', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Button />, {
      rebass: {
        colors: {
          primary: 'tomato'
        },
        Button: {
          textTransform: 'uppercase'
        }
      }
    })
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('button')
  })

  it('should pick up custom styles from context', () => {
    expect(tree.props.style.textTransform).toEqual('uppercase')
  })

  it('should pick up custom global styles from context', () => {
    expect(tree.props.style.backgroundColor).toEqual('tomato')
  })
})

