import React from 'react'
import { Link } from 'rrx'
import {
  Absolute,
  Toolbar,
  Box,
  NavLink,
} from 'rebass'

const NavBar = props => (
  <Absolute
    zIndex={2}
    top={0}
    left={0}
    right={0}>
    <Toolbar bg='transparent' {...props}>
      <NavLink
        is={Link}
        href='/'
        children='Rebass'
      />
      <Box mx='auto' />
      <NavLink
        href='https://github.com/jxnblk/rebass'
        children='GitHub'
      />
      <NavLink
        is={Link}
        href='/getting-started'
        children='Docs'
      />
    </Toolbar>
  </Absolute>
)

export default NavBar
