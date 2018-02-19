import React from 'react'
import connect from 'refunk'
import { Link } from 'react-router-dom'
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
      to='/'
      children='Rebass'
    />
    <Box mx='auto' />
    <NavLink
      href='https://github.com/jxnblk/rebass'
      children='GitHub'
    />
    <NavLink
      is={Link}
      to='/getting-started'
      children='Docs'
    />
  </Toolbar>
)

export default connect(NavBar)
