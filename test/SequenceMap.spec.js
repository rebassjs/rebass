
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { SequenceMap, Base, LinkBlock } from '../src'

const renderer = TestUtils.createRenderer()

describe('SequenceMap', () => {
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

  context('when children are passed in', () => {
    beforeEach(() => {
      renderer.render(
        <SequenceMap>
          <SequenceMap.Step children='Hello' />
          <SequenceMap.Step children='Hi' />
        </SequenceMap>
      )
      tree = renderer.getRenderOutput()
    })

    it('should set first on first child', () => {
      expect(tree.props.children[0].props.first).toEqual(true)
    })

    it('should not set first on second child', () => {
      expect(tree.props.children[1].props.first).toNotExist()
    })

    it('should set width on children', () => {
      expect(tree.props.children[0].props.width).toEqual('50%')
      expect(tree.props.children[1].props.width).toEqual('50%')
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

describe('SequenceMap.Step', () => {
  let tree

  beforeEach(() => {
    renderer.render(<SequenceMap.Step />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(LinkBlock)
  })

  it('should have a className', () => {
    expect(tree.props._className).toEqual('SequenceMap_Step')
  })

  it('should not have active colors', () => {
    expect(tree.props.style.color).toNotExist()
  })

  it('should have a line', () => {
    expect(tree.props.children[1].props.style.position).toEqual('absolute')
  })

  context('when first is set', () => {
    beforeEach(() => {
      renderer.render(<SequenceMap.Step first />)
      tree = renderer.getRenderOutput()
    })

    it('should not have a line', () => {
      expect(tree.props.children[1]).toEqual(false)
    })
  })

  context('when active is set', () => {
    beforeEach(() => {
      renderer.render(<SequenceMap.Step active />)
      tree = renderer.getRenderOutput()
    })

    it('should have active styles', () => {
      expect(tree.props.style.color).toExist()
    })
  })

  context('when width is set', () => {
    beforeEach(() => {
      renderer.render(<SequenceMap.Step width='50%' />)
      tree = renderer.getRenderOutput()
    })

    it('should set flex style', () => {
      expect(tree.props.style.flex).toEqual('1 1 50%')
    })
  })
})

