import React from 'react'
import connect from 'refunk'
import { Link } from 'rrx'
import {
  Absolute,
  Toolbar,
  Box,
  NavLink,
} from 'rebass'

const toggle = key => state => ({ [key]: !state[key] })

const NavBar = props => (
  <Toolbar
    px={[ 0, 3 ]}
    bg='black'
    onClick={e => {
      props.update(toggle('menu'))
    }}>
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
)

export default connect(NavBar)
