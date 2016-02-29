
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Button, Panel } from '../src'

const renderer = TestUtils.createRenderer()

class Root extends React.Component {
  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: {
        colors: {
          primary: 'red'
        },
        Button: {
          backgroundColor: 'tomato'
        }
      }
    }
  }

  render () {
    return (
      <div>
        <Button />
        <Panel />
      </div>
    )
  }
}

describe('React context', () => {
  let tree, button, panel

  beforeEach(() => {
    renderer.render(
      <Root>
        <Button />
        <Panel />
      </Root>
    )
    tree = renderer.getRenderOutput()
    button = tree.props.children[0]
    panel = tree.props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
    expect(button).toExist()
  })

  it('should pick up custom styles from context')

  it('should pick up custom global styles from context')
})

