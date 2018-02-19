import React from 'react'
import connect from 'refunk'
import { Link } from 'react-router-dom'
import Measure from 'react-measure'
import {
  Box,
  Flex,
  NavLink,
  Divider
} from 'rebass'
import Container from './Container'
import { components } from './examples'

const A = props =>
  <NavLink
    {...props}
    is={Link}
    width={1}
    py={0}
    style={{
      display: 'block',
    }}
  />

const quarter = Math.ceil(components.length / 4)
const comps = {}
comps.a = components.slice(0, quarter)
comps.b = components.slice(quarter, quarter * 2)
comps.c = components.slice(quarter * 2, quarter * 3)
comps.d = components.slice(quarter * 3)

class Menu extends React.Component {
  constructor () {
    super()
    this.state = {
      entry: {}
    }
  }

  componentDidMount () {
    requestAnimationFrame(() => {
      this.didMount = true
    })
  }

  render () {
    const {
      update,
      menu,
      location: {
        pathname
      } = {},
    } = this.props
    const { height } = this.state.entry

    return (
      <Measure
        onResize={(rect) => this.setState(rect)}
        children={({ measureRef }) => (
          <Box
            innerRef={measureRef}
            onClick={e => {
              update(toggle('menu'))
              e.stopPropagation()
            }}
            style={{
              marginTop: menu ? 0 : `${-height}px`,
              transition: this.didMount ? 'margin-top .125s ease-out' : 'none',
              WebkitFontSmoothing: 'antialiased'
            }}
            color='white'
            bg='black'>
            <Flex flexWrap='wrap'>
              <Box width={[ 160 ]} p={3}>
                <A
                  to='/getting-started'
                  children='Getting Started'
                />
                <A
                  to='/props'
                  children='Props'
                />
                <A
                  to='/grid-system'
                  children='Grid System'
                />
                <A
                  to='/theming'
                  children='Theming'
                />
                <A
                  to='/extending'
                  children='Extending'
                />
                <A
                  to='/server-side-rendering'
                  children='Server Side'
                />
                <A
                  to='/components'
                  children={components.length + ' Components'}
                />
              </Box>
              <Box width={[ 160 ]} p={3}>
                {comps.a.map(name => (
                  <A
                    key={name}
                    to={`/components/${name}`}
                    children={name}
                  />
                ))}
              </Box>
              <Box width={[ 160 ]} p={3}>
                {comps.b.map(name => (
                  <A
                    key={name}
                    to={`/components/${name}`}
                    children={name}
                  />
                ))}
              </Box>
              <Box width={[ 160 ]} p={3}>
                {comps.c.map(name => (
                  <A
                    key={name}
                    to={`/components/${name}`}
                    children={name}
                  />
                ))}
              </Box>
              <Box width={[ 160 ]} p={3}>
                {comps.d.map(name => (
                  <A
                    key={name}
                    to={`/components/${name}`}
                    children={name}
                  />
                ))}
              </Box>
            </Flex>
            <Divider my={0} borderColor='magenta' />
          </Box>
        )}
      />
    )
  }
}

const toggle = key => state => ({ [key]: !state[key] })

export default connect(Menu)
