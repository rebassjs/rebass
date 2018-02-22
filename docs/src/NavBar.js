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
    px={[ 2 ]}
    color='black'
    bg='transparent'
    onClick={e => {
      props.update(toggle('menu'))
    }}>
    <NavLink
      is={Link}
      to='/'
      children='Rebass'
      onClick={e => {
        e.stopPropagation()
        props.update({ menu: false })
      }}
    />
    <Box mx='auto' />
    <NavLink
      is={Link}
      to='/getting-started'
      children='Docs'
    />
  </Toolbar>
)

export default connect(NavBar)
