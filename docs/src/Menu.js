import React from 'react'
import connect from 'refunk'
import { Link } from 'rrx'
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
    fontSize={0}
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
      <Box width={[ 128 ]} p={3}>
        <A
          href='/getting-started'
          children='Getting Started'
          active={pathname === '/getting-started'}
        />
        <A
          href='/props'
          children='Props'
          active={pathname === '/props'}
        />
        <A
          href='/grid-system'
          children='Grid System'
          active={pathname === '/grid-system'}
        />
        <A
          href='/theming'
          children='Theming'
          active={pathname === '/theming'}
        />
        <A
          href='/extending'
          children='Extending'
          active={pathname === '/extending'}
        />
        <A
          href='/server-side-rendering'
          children='Server Side'
          active={pathname === '/server-side-rendering'}
        />
        <A
          href='/components'
          children={components.length + ' Components'}
          active={pathname === '/components'}
        />
      </Box>
      <Box width={[ 128 ]} p={3}>
        {comps.a.map(name => (
          <A
            key={name}
            href={`/components/${name}`}
            children={name}
            active={pathname === '/components/' + name}
          />
        ))}
      </Box>
      <Box width={[ 128 ]} p={3}>
        {comps.b.map(name => (
          <A
            key={name}
            href={`/components/${name}`}
            children={name}
            active={pathname === '/components/' + name}
          />
        ))}
      </Box>
      <Box width={[ 128 ]} p={3}>
        {comps.c.map(name => (
          <A
            key={name}
            href={`/components/${name}`}
            children={name}
            active={pathname === '/components/' + name}
          />
        ))}
      </Box>
      <Box width={[ 128 ]} p={3}>
        {comps.d.map(name => (
          <A
            key={name}
            href={`/components/${name}`}
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

/*
  <Box width={[ 1/2, 192]}>
    <NavLink
      is='a'
      width={1}
      py={0}
      fontSize={0}
      href='http://jxnblk.com/rebass/demo'
      children='Demo'
    />
    <NavLink
      is='a'
      width={1}
      py={0}
      fontSize={0}
      href='https://github.com/jxnblk/rebass'
      children='GitHub'
    />
    <NavLink
      is='a'
      fontSize={0}
      width={1}
      py={0}
      href='http://jxnblk.com'
      children='Made by Jxnblk'
    />
  </Box>
*/
