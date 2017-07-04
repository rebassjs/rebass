import React from 'react'
import {
  Absolute,
  Toolbar,
  NavLink,
  BlockLink,
  Image,
} from 'rebass'

const NavBar = props => (
  <Absolute top left right>
    <Toolbar py={2} bg='transparent'>
      <NavLink
        href='http://jxnblk.com/rebass'
        children='Rebass'
      />
      <NavLink
        href='https://github.com/jxnblk/rebass'
        children='GitHub'
        mr='auto'
      />
      <BlockLink
        mx={2}
        href='https://travis-ci.org/jxnblk/rebass'>
        <Image
          src='https://img.shields.io/travis/jxnblk/rebass/master.svg'
        />
      </BlockLink>
      <BlockLink
        mx={2}
        href='https://github.com/jxnblk/rebass'>
        <Image
          src='https://img.shields.io/github/stars/jxnblk/rebass.svg?style=social&label=Star'
        />
      </BlockLink>
    </Toolbar>
  </Absolute>
)

export default NavBar
