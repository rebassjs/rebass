
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import jsdom from 'mocha-jsdom'
import { Link } from 'react-router'
import { config, Base, Button } from '../src'

const renderer = TestUtils.createRenderer()

describe('Base', () => {
  const { scale, colors, borderRadius } = config
  let tree

  beforeEach(() => {
    renderer.render(<Base />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should not have a className', () => {
    expect(tree.props.className).toNotExist()
  })

  context('when tagName is an HTML element string', () => {
    beforeEach(() => {
      renderer.render(<Base tagName='button' />)
      tree = renderer.getRenderOutput()
    })
    it('should render a button', () => {
      expect(tree.type).toEqual('button')
    })
  })

  context('when tagName is a component', () => {
    beforeEach(() => {
      renderer.render(<Base tagName={Button} />)
      tree = renderer.getRenderOutput()
    })

    it('should render a Button component', () => {
      expect(tree.type).toEqual(Button)
    })
  })

  context('when is prop is set to Link', () => {
    beforeEach(() => {
      renderer.render(<Base is={Link} />)
      tree = renderer.getRenderOutput()
    })
    it('should render a Link', () => {
      expect(tree.type).toEqual(Link)
    })
  })

  context('when className is set', () => {
    beforeEach(() => {
      renderer.render(<Base className='Button' />)
      tree = renderer.getRenderOutput()
    })
    it('should render', () => {
      expect(tree.type).toEqual('div')
    })
  })

  context('when context is set for config', () => {
    beforeEach(() => {
      renderer.render(<Base className='Button' />, {
        rebass: { colors: { primary: 'tomato' } }
      })
      tree = renderer.getRenderOutput()
    })
    it('should render', () => {
      expect(tree.type).toEqual('div')
    })
  })

  context('when context is set for className', () => {
    beforeEach(() => {
      renderer.render(<Base className='Test' />, {
        rebass: { Test: { backgroundColor: 'tomato' } }
      })
      tree = renderer.getRenderOutput()
    })
    it('should set background color', () => {
      expect(tree.props.style.backgroundColor).toEqual('tomato')
    })
  })

  context('when context is set and className has multiple classes', () => {
    beforeEach(() => {
      renderer.render(<Base className='Test Test_foo isBar' />, {
        rebass: {
          Test: { backgroundColor: 'tomato' },
          Test_foo: { color: 'white' },
          isBar: { outline: '2px solid red' }
        }
      })
      tree = renderer.getRenderOutput()
    })

    it('should set background color', () => {
      expect(tree.props.style.backgroundColor).toEqual('tomato')
    })

    it('should set color', () => {
      expect(tree.props.style.color).toEqual('white')
    })

    it('should set outline', () => {
      expect(tree.props.style.outline).toEqual('2px solid red')
    })
  })

  context('when baseStyle is set', () => {
    beforeEach(() => {
      renderer.render(<Base baseStyle={{ backgroundColor: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should set background color', () => {
      expect(tree.props.style.backgroundColor).toEqual('tomato')
    })
  })

  context('when context and baseStyle are set', () => {
    beforeEach(() => {
      renderer.render(<Base className='Test' baseStyle={{ backgroundColor: 'tomato' }} />, {
        rebass: {
          Test: {
            backgroundColor: 'green'
          }
        }
      })
      tree = renderer.getRenderOutput()
    })
    it('should set background color based on context', () => {
      expect(tree.props.style.backgroundColor).toEqual('green')
    })
  })

  context('when context and style are set', () => {
    beforeEach(() => {
      renderer.render(<Base className='Test' style={{ backgroundColor: 'tomato' }} />, {
        rebass: {
          Test: {
            backgroundColor: 'green'
          }
        }
      })
      tree = renderer.getRenderOutput()
    })
    it('should set background color based on baseStyle', () => {
      expect(tree.props.style.backgroundColor).toEqual('tomato')
    })
  })

  context('when baseStyle and style are set', () => {
    beforeEach(() => {
      renderer.render(<Base baseStyle={{ backgroundColor: 'green' }} style={{ backgroundColor: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should set background color based on style', () => {
      expect(tree.props.style.backgroundColor).toEqual('tomato')
    })
  })

  context('when context, baseStyle, and style are set', () => {
    beforeEach(() => {
      renderer.render(<Base className='Test' baseStyle={{ backgroundColor: 'green' }} style={{ backgroundColor: 'tomato' }} />, {
        rebass: {
          Test: {
            backgroundColor: 'black'
          }
        }
      })
      tree = renderer.getRenderOutput()
    })
    it('should set background color based on style', () => {
      expect(tree.props.style.backgroundColor).toEqual('tomato')
    })
  })

  describe('margins', () => {
    context('when m is set', () => {
      beforeEach(() => {
        renderer.render(<Base m={1} />)
        tree = renderer.getRenderOutput()
      })
      it('should set margin', () => {
        expect(tree.props.style.margin).toEqual(scale[1])
      })
    })

    context('when mt is set', () => {
      beforeEach(() => {
        renderer.render(<Base mt={2} />)
        tree = renderer.getRenderOutput()
      })
      it('should set margin top', () => {
        expect(tree.props.style.marginTop).toEqual(scale[2])
      })
    })

    context('when mx is set', () => {
      beforeEach(() => {
        renderer.render(<Base mx={3} />)
        tree = renderer.getRenderOutput()
      })
      it('should set margin left and right', () => {
        expect(tree.props.style.marginLeft).toEqual(scale[3])
        expect(tree.props.style.marginRight).toEqual(scale[3])
      })
    })

    context('when my is set', () => {
      beforeEach(() => {
        renderer.render(<Base my={3} />)
        tree = renderer.getRenderOutput()
      })
      it('should set margin top and bottom', () => {
        expect(tree.props.style.marginTop).toEqual(scale[3])
        expect(tree.props.style.marginBottom).toEqual(scale[3])
      })
    })

    context('when my and mt are set', () => {
      beforeEach(() => {
        renderer.render(<Base mt={1} my={3} />)
        tree = renderer.getRenderOutput()
      })
      it('should set margin top and bottom based on my', () => {
        expect(tree.props.style.marginTop).toEqual(scale[3])
        expect(tree.props.style.marginBottom).toEqual(scale[3])
      })
    })

    context('when baseStyle and m are set', () => {
      beforeEach(() => {
        renderer.render(<Base baseStyle={{ margin: 3 }} m={1} />)
        tree = renderer.getRenderOutput()
      })
      it('should set margin based on m', () => {
        expect(tree.props.style.margin).toEqual(scale[1])
      })
    })

    context('when style and m are set', () => {
      beforeEach(() => {
        renderer.render(<Base style={{ margin: 3 }} m={1} />)
        tree = renderer.getRenderOutput()
      })
      it('should set margin based on style', () => {
        expect(tree.props.style.margin).toEqual(3)
      })
    })
  })

  describe('padding', () => {
    context('when p is set', () => {
      beforeEach(() => {
        renderer.render(<Base p={1} />)
        tree = renderer.getRenderOutput()
      })
      it('should set padding', () => {
        expect(tree.props.style.padding).toEqual(scale[1])
      })
    })

    context('when pt is set', () => {
      beforeEach(() => {
        renderer.render(<Base pt={2} />)
        tree = renderer.getRenderOutput()
      })
      it('should set padding top', () => {
        expect(tree.props.style.paddingTop).toEqual(scale[2])
      })
    })

    context('when px is set', () => {
      beforeEach(() => {
        renderer.render(<Base px={3} />)
        tree = renderer.getRenderOutput()
      })
      it('should set padding left and right', () => {
        expect(tree.props.style.paddingLeft).toEqual(scale[3])
        expect(tree.props.style.paddingRight).toEqual(scale[3])
      })
    })

    context('when py is set', () => {
      beforeEach(() => {
        renderer.render(<Base py={3} />)
        tree = renderer.getRenderOutput()
      })
      it('should set padding top and bottom', () => {
        expect(tree.props.style.paddingTop).toEqual(scale[3])
        expect(tree.props.style.paddingBottom).toEqual(scale[3])
      })
    })

    context('when py and pt are set', () => {
      beforeEach(() => {
        renderer.render(<Base pt={1} py={3} />)
        tree = renderer.getRenderOutput()
      })
      it('should set padding top and bottom based on py', () => {
        expect(tree.props.style.paddingTop).toEqual(scale[3])
        expect(tree.props.style.paddingBottom).toEqual(scale[3])
      })
    })

    context('when baseStyle and p are set', () => {
      beforeEach(() => {
        renderer.render(<Base baseStyle={{ padding: 3 }} p={1} />)
        tree = renderer.getRenderOutput()
      })
      it('should set padding based on p', () => {
        expect(tree.props.style.padding).toEqual(scale[1])
      })
    })

    context('when style and p are set', () => {
      beforeEach(() => {
        renderer.render(<Base style={{ padding: 3 }} p={1} />)
        tree = renderer.getRenderOutput()
      })
      it('should set padding based on style', () => {
        expect(tree.props.style.padding).toEqual(3)
      })
    })
  })

  describe('colors', () => {
    context('when color is set to a key', () => {
      beforeEach(() => {
        renderer.render(<Base color='blue' />)
        tree = renderer.getRenderOutput()
      })

      it('should set color from the config', () => {
        expect(tree.props.style.color).toEqual(colors.blue)
      })
    })

    context('when a color string is set', () => {
      beforeEach(() => {
        renderer.render(<Base color='tomato' />)
        tree = renderer.getRenderOutput()
      })

      it('should set color from the string', () => {
        expect(tree.props.style.color).toEqual('tomato')
      })
    })

    context('when background color is set to a key', () => {
      beforeEach(() => {
        renderer.render(<Base backgroundColor='blue' />)
        tree = renderer.getRenderOutput()
      })

      it('should set background color from the config', () => {
        expect(tree.props.style.backgroundColor).toEqual(colors.blue)
      })
    })

    context('when a background color string is set', () => {
      beforeEach(() => {
        renderer.render(<Base backgroundColor='tomato' />)
        tree = renderer.getRenderOutput()
      })

      it('should set color from the string', () => {
        expect(tree.props.style.backgroundColor).toEqual('tomato')
      })
    })

    context('when context and color are set', () => {
      beforeEach(() => {
        renderer.render(<Base className='Test' color='blue' />, {
          rebass: {
            Test: {
              color: 'green',
              backgroundColor: 'tomato'
            }
          }
        })
        tree = renderer.getRenderOutput()
      })

      it('should set color from the config', () => {
        expect(tree.props.style.color).toEqual(colors.blue)
      })

      it('should set background color from context', () => {
        expect(tree.props.style.backgroundColor).toEqual('tomato')
      })
    })

    context('when baseStyle and color are set', () => {
      beforeEach(() => {
        renderer.render(<Base baseStyle={{ color: 'green', backgroundColor: 'tomato' }} color='blue' />)
        tree = renderer.getRenderOutput()
      })

      it('should set color from the config', () => {
        expect(tree.props.style.color).toEqual(colors.blue)
      })

      it('should set background color from baseStyle', () => {
        expect(tree.props.style.backgroundColor).toEqual('tomato')
      })
    })

    context('when style and color are set', () => {
      beforeEach(() => {
        renderer.render(<Base style={{ color: 'green', backgroundColor: 'tomato' }} color='blue' />)
        tree = renderer.getRenderOutput()
      })

      it('should set color from style', () => {
        expect(tree.props.style.color).toEqual('green')
      })

      it('should set background color from baseStyle', () => {
        expect(tree.props.style.backgroundColor).toEqual('tomato')
      })
    })
  })

  describe('border radii', () => {
    context('when rounded is true', () => {
      beforeEach(() => {
        renderer.render(<Base rounded />)
        tree = renderer.getRenderOutput()
      })
      it('should set border radius', () => {
        expect(tree.props.style.borderRadius).toEqual(borderRadius)
      })
    })

    context('when rounded is false', () => {
      beforeEach(() => {
        renderer.render(<Base rounded={false} />)
        tree = renderer.getRenderOutput()
      })
      it('should set border radius 0', () => {
        expect(tree.props.style.borderRadius).toEqual(0)
      })
    })

    context('when rounded is top', () => {
      beforeEach(() => {
        renderer.render(<Base rounded='top' />)
        tree = renderer.getRenderOutput()
      })
      it('should set top border radii', () => {
        expect(tree.props.style.borderRadius).toEqual(`${borderRadius}px ${borderRadius}px 0 0`)
      })
    })

    context('when rounded is right', () => {
      beforeEach(() => {
        renderer.render(<Base rounded='right' />)
        tree = renderer.getRenderOutput()
      })
      it('should set right border radii', () => {
        expect(tree.props.style.borderRadius).toEqual(`0 ${borderRadius}px ${borderRadius}px 0`)
      })
    })

    context('when rounded is bottom', () => {
      beforeEach(() => {
        renderer.render(<Base rounded='bottom' />)
        tree = renderer.getRenderOutput()
      })
      it('should set bottom border radii', () => {
        expect(tree.props.style.borderRadius).toEqual(`0 0 ${borderRadius}px ${borderRadius}px`)
      })
    })

    context('when rounded is left', () => {
      beforeEach(() => {
        renderer.render(<Base rounded='left' />)
        tree = renderer.getRenderOutput()
      })
      it('should set left border radii', () => {
        expect(tree.props.style.borderRadius).toEqual(`${borderRadius}px 0 0 ${borderRadius}px`)
      })
    })

    context('when pill is set', () => {
      beforeEach(() => {
        renderer.render(<Base pill />)
        tree = renderer.getRenderOutput()
      })
      it('should set border radius 99999', () => {
        expect(tree.props.style.borderRadius).toEqual(99999)
      })
    })

    context('when circle is set', () => {
      beforeEach(() => {
        renderer.render(<Base circle />)
        tree = renderer.getRenderOutput()
      })
      it('should set border radius 99999', () => {
        expect(tree.props.style.borderRadius).toEqual(99999)
      })
    })

    context('when rounded and baseStyle are set', () => {
      beforeEach(() => {
        renderer.render(<Base rounded baseStyle={{ borderRadius: 5 }} />)
        tree = renderer.getRenderOutput()
      })
      it('should set border radius based on rounded prop', () => {
        expect(tree.props.style.borderRadius).toEqual(borderRadius)
      })
    })

    context('when rounded and context are set', () => {
      beforeEach(() => {
        renderer.render(<Base className='Test' rounded />, {
          rebass: {
            Test: {
              borderRadius: 15
            }
          }
        })
        tree = renderer.getRenderOutput()
      })
      it('should set border radius based on rounded prop', () => {
        expect(tree.props.style.borderRadius).toEqual(borderRadius)
      })
    })

    context('when rounded and style are set', () => {
      beforeEach(() => {
        renderer.render(<Base rounded style={{ borderRadius: 5 }} />)
        tree = renderer.getRenderOutput()
      })
      it('should set border radius based on style prop', () => {
        expect(tree.props.style.borderRadius).toEqual(5)
      })
    })
  })

  context('when context is set', () => {
    beforeEach(() => {
      renderer.render(<Base className='Test' />, {
        rebass: {
          Test: {
            backgroundColor: 'tomato'
          }
        }
      })
      tree = renderer.getRenderOutput()
    })

    it('should have a custom background color', () => {
      expect(tree.props.style.backgroundColor).toEqual('tomato')
    })
  })

  describe('Rebass props', () => {
    context('when custom props are set', () => {
      beforeEach(() => {
        renderer.render(
          <Base
            tagName='h1'
            is='h1'
            baseStyle={{ color: 'black' }}
            m={1} mt={1} mr={1} mb={1} ml={1} mx={1} my={1}
            p={1} pt={1} pr={1} pb={1} pl={1} px={1} py={1}
            rounded pill circle
            theme='info'
            color='black'
            backgroundColor='cyan'
            inverted />
        )
        tree = renderer.getRenderOutput()
      })

      it('should not pass Base props to DOM elements', () => {
        expect(tree.props.tagName).toNotExist()
        expect(tree.props.is).toNotExist()
        expect(tree.props.baseStyle).toNotExist()
      })

      it('should not pass margin props to DOM elements', () => {
        expect(tree.props.m).toNotExist()
        expect(tree.props.mt).toNotExist()
        expect(tree.props.mr).toNotExist()
        expect(tree.props.mb).toNotExist()
        expect(tree.props.ml).toNotExist()
        expect(tree.props.mx).toNotExist()
        expect(tree.props.my).toNotExist()
      })

      it('should not pass padding props to DOM elements', () => {
        expect(tree.props.p).toNotExist()
        expect(tree.props.pt).toNotExist()
        expect(tree.props.pr).toNotExist()
        expect(tree.props.pb).toNotExist()
        expect(tree.props.pl).toNotExist()
        expect(tree.props.px).toNotExist()
        expect(tree.props.py).toNotExist()
      })

      it('should not pass border radius props to DOM elements', () => {
        expect(tree.props.rounded).toNotExist()
        expect(tree.props.pill).toNotExist()
        expect(tree.props.circle).toNotExist()
      })

      it('should not pass color props to DOM elements', () => {
        expect(tree.props.theme).toNotExist()
        expect(tree.props.color).toNotExist()
        expect(tree.props.backgroundColor).toNotExist()
        expect(tree.props.inverted).toNotExist()
      })
    })
  })

  describe('baseRef', () => {
    let tree
    let el

    jsdom()

    before(() => {
      tree = TestUtils.renderIntoDocument(<Base baseRef={ref => { el = ref }} />)
    })

    it('should render', () => {
      expect(tree).toExist()
    })

    it('should return the element with baseRef', () => {
      expect(el).toBeAn(window.Element)
    })
  })
})

