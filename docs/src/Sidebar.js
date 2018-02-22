import React from 'react'
import connect from 'refunk'
import { Link } from 'react-router-dom'
import Measure from 'react-measure'
import styled from 'styled-components'
import {
  Box,
  Sticky,
  Fixed,
  Flex,
  NavLink,
  Divider
} from 'rebass'
import { components } from './examples'

const Root = styled(Sticky)`
  height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media screen and (max-width: 32em) {
    display: none;
  }
`

const A = styled(props =>
  <NavLink
    {...props}
    is={Link}
    width={1}
    fontSize={0}
    py={1}
  />)`
  display: block;
  transition: color .1s ease-out;
  &:hover {
    color: magenta;
  }
`

const quarter = Math.ceil(components.length / 4)
const comps = {}
comps.a = components.slice(0, quarter)
comps.b = components.slice(quarter, quarter * 2)
comps.c = components.slice(quarter * 2, quarter * 3)
comps.d = components.slice(quarter * 3)

class Menu extends React.Component {
  render () {
    const {
      update,
      menu,
      location: {
        pathname
      } = {},
    } = this.props

    return (
      <Root top={0}>
        <Box
          width={160}
          px={2}
          pt={3}
          pb={5}>
          <A
            to='/'
            children='Rebass'
          />
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
          <Box my={3} />
          <A
            to='/components'
            children='Components'
          />
          {components.map(name => (
            <A
              key={name}
              to={`/components/${name}`}
              children={name}
            />
          ))}
          <Box my={3} />
        </Box>
      </Root>
    )
  }
}

const toggle = key => state => ({ [key]: !state[key] })

export default connect(Menu)
