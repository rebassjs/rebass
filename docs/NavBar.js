import React from 'react'
import {
  Absolute,
  Toolbar,
  Box,
  NavLink,
  BlockLink,
  Image,
} from 'rebass'
import Hide from 'hidden-styled'
import Tweet from './Tweet'

const NavBar = props => (
  <Absolute top left right>
    <Toolbar py={2} bg='transparent'>
      <Hide xs>
        <NavLink
          href='http://jxnblk.com/rebass'
          children='Rebass'
        />
      </Hide>
      <Hide xs>
        <NavLink
          href='https://github.com/jxnblk/rebass'
          children='GitHub'
        />
      </Hide>
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
