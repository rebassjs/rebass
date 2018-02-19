import React from 'react'
import connect from 'refunk'
import { Link } from 'react-router-dom'
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

const Menu = ({
  update,
  location: {
    pathname
  } = {}
}) => (
  <Box
    onClick={e => {
      update(toggle('menu'))
      e.stopPropagation()
    }}
    style={{
      WebkitFontSmoothing: 'antialiased'
    }}
    color='white'
    bg='black'>
    <Flex flexWrap='wrap'>
      <Box width={[ 160 ]} p={3}>
        <A
          to='/getting-started'
          children='Getting Started'
          active={pathname === '/getting-started'}
        />
        <A
          to='/props'
          children='Props'
          active={pathname === '/props'}
        />
        <A
          to='/grid-system'
          children='Grid System'
          active={pathname === '/grid-system'}
        />
        <A
          to='/theming'
          children='Theming'
          active={pathname === '/theming'}
        />
        <A
          to='/extending'
          children='Extending'
          active={pathname === '/extending'}
        />
        <A
          to='/server-side-rendering'
          children='Server Side'
          active={pathname === '/server-side-rendering'}
        />
        <A
          to='/components'
          children={components.length + ' Components'}
          active={pathname === '/components'}
        />
      </Box>
      <Box width={[ 160 ]} p={3}>
        {comps.a.map(name => (
          <A
            key={name}
            to={`/components/${name}`}
            children={name}
            active={pathname === '/components/' + name}
          />
        ))}
      </Box>
      <Box width={[ 160 ]} p={3}>
        {comps.b.map(name => (
          <A
            key={name}
            to={`/components/${name}`}
            children={name}
            active={pathname === '/components/' + name}
          />
        ))}
      </Box>
      <Box width={[ 160 ]} p={3}>
        {comps.c.map(name => (
          <A
            key={name}
            to={`/components/${name}`}
            children={name}
            active={pathname === '/components/' + name}
          />
        ))}
      </Box>
      <Box width={[ 160 ]} p={3}>
        {comps.d.map(name => (
          <A
            key={name}
            to={`/components/${name}`}
            children={name}
            active={pathname === '/components/' + name}
          />
        ))}
      </Box>
    </Flex>
    <Divider my={0} borderColor='magenta' />
  </Box>
)

const toggle = key => state => ({ [key]: !state[key] })

export default connect(Menu)
