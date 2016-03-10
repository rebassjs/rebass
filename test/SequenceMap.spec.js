
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { config, SequenceMap, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('SequenceMap', () => {
  const { colors } = config
  let tree

  beforeEach(() => {
    renderer.render(<SequenceMap />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('SequenceMap')
  })

  it('should not show steps by default', () => {
    expect(tree.props.children).toEqual([])
  })

  context('when steps are set', () => {
    beforeEach(() => {
      renderer.render(
        <SequenceMap
          steps={[
            { children: 'Step One' },
            { children: 'Step Two' },
            { children: 'Step Three' }
          ]} />
      )
      tree = renderer.getRenderOutput()
    })

    it('should have 3 steps', () => {
      expect(tree.props.children.length).toEqual(3)
    })

    it('should not show active steps', () => {
      expect(tree.props.children[0].props.active).toNotExist()
    })
  })

  context('when active is set', () => {
    beforeEach(() => {
      renderer.render(
        <SequenceMap
          steps={[
            { test: 'Hello', children: 'Step One' },
            { children: 'Step Two' },
            { children: 'Step Three' }
          ]}
          active={1} />
      )
      tree = renderer.getRenderOutput()
    })

    it('should have 3 steps', () => {
      expect(tree.props.children.length).toEqual(3)
    })

    it('should pass object as props to steps', () => {
      expect(tree.props.children[0].props.test).toEqual('Hello')
    })

    it('should show active steps', () => {
      expect(tree.props.children[0].props.active).toEqual(true)
      expect(tree.props.children[1].props.active).toEqual(true)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<SequenceMap style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

