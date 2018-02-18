import React from 'react'
import { Link } from 'rrx'
import {
  Absolute,
  Toolbar,
  Box,
  NavLink,
  BlockLink,
  Image,
} from 'rebass'
import Tweet from './Tweet'

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
        <NavLink
          href='https://github.com/jxnblk/rebass'
          children='GitHub'
        />
        <NavLink
          is={Link}
          href='/getting-started'
          children='Docs'
        />
      <Box mx='auto' />
      <Tweet />
        <BlockLink
          ml={3}
          mr={2}
          py={2}
          href='https://travis-ci.org/jxnblk/rebass'>
          <Image
            src='https://img.shields.io/travis/jxnblk/rebass/master.svg'
          />
        </BlockLink>
      <BlockLink
        mx={2}
        py={2}
        href='https://github.com/jxnblk/rebass'>
        <Image
          src='https://img.shields.io/github/stars/jxnblk/rebass.svg?style=social&label=Star'
        />
      </BlockLink>
    </Toolbar>
  </Absolute>
)

export default NavBar
