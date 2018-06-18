import React from 'react'
import { Toolbar, Caps, Box, NavLink } from '../src'

export default () =>
  <Toolbar>
    <Caps fontWeight='bold'>Toolbar</Caps>
    <Box mx='auto' />
    <NavLink mx={2} href='#'>Link</NavLink>
    <NavLink mx={2} href='#'>Link</NavLink>
  </Toolbar>
