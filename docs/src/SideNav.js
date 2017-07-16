import React from 'react'
import { Link as RLink } from 'rrx'
import styled from 'styled-components'
import {
  Flex,
  Box,
  Subhead,
  Divider,
  NavLink
} from 'rebass'
import { components } from './examples'

const Link = styled(props => (
  <NavLink
    is={RLink}
    href={'#' + props.name}
    children={props.name}
    f={[ 0, 1 ]}
    {...props}
    w={[ 1/2, 1 ]}
    px={3}
    py={1}
  />
))([], props => ({
  color: props.active ? 'white' : 'inherit',
  backgroundColor: props.active ? props.theme.colors.blue : 'transparent',
  '&:hover': {
    backgroundColor: props.active ? props.theme.colors.blue : null,
  }
}))

const SideNav = props => {
  const { pathname } = props.location

  return (
    <nav>
      <Flex wrap py={4}>
        <Divider w={1} my={3} color='gray3' />
        <Link
          href='/getting-started'
          children='Getting Started'
          active={pathname === '/getting-started'}
        />
        <Link
          href='/props'
          children='Props'
          active={pathname === '/props'}
        />
        <Link
          href='/grid-system'
          children='Grid System'
          active={pathname === '/grid-system'}
        />
        <Link
          href='/theming'
          children='Theming'
          active={pathname === '/theming'}
        />
        <Link
          href='/extending'
          children='Extending'
          active={pathname === '/extending'}
        />
        <Link
          href='/server-side-rendering'
          children='Server Side Rendering'
          active={pathname === '/server-side-rendering'}
        />
        <Divider w={1} my={3} color='gray3' />
        <Link
          href='/components'
          children={components.length + ' Components'}
          active={pathname === '/components'}
        />
        {components.map(name => (
          <Link
            key={name}
            href={`/components/${name}`}
            children={name}
            active={pathname === '/components/' + name}
          />
        ))}
        <Divider w={1} my={3} color='gray3' />
        <Link
          href='/storybook'
          children='Storybook'
        />
        <Link
          is='a'
          f={0}
          href='https://github.com/jxnblk/rebass'
          children='GitHub'
        />
        <Link
          f={0}
          is='a'
          href='http://jxnblk.com'
          children='Made by Jxnblk'
        />
      </Flex>
    </nav>
  )
}

export default SideNav
