import React from 'react'
import { Link as RLink } from 'rrx'
import {
  Box,
  Subhead,
  Divider,
  NavLink
} from 'rebass'
import { components } from './examples'

const Link = props => (
  <NavLink
    is={RLink}
    href={'#' + props.name}
    children={props.name}
    {...props}
    w={1}
    px={3}
    py={1}
  />
)

const SideNav = props => {
  const { pathname } = props.location

  return (
    <nav>
      <Box py={3}>
        <Link href='/' children='Rebass' />
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
        <Divider my={3} color='gray3' />
        <Subhead f={0} px={3} mb={2} caps>
          {components.length} Components
        </Subhead>
        {components.map(name => (
          <Link
            key={name}
            href={`/components/${name}`}
            children={name}
            active={pathname === '/components/' + name}
          />
        ))}
        <Divider my={3} color='gray3' />
        <Link
          is='a'
          href='https://github.com/jxnblk/rebass'
          children='GitHub'
        />
        <Link
          is='a'
          href='http://jxnblk.com'
          children='Made by Jxnblk'
        />
      </Box>
    </nav>
  )
}

export default SideNav
