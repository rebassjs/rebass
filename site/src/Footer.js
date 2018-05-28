import React from 'react'
import {
  Flex,
  Box,
  NavLink
} from 'rebass'

export default () =>
  <Flex
    is='footer'
    mx={-2}
    py={4}>
    <NavLink
      mr={3}
      href='https://github.com/jxnblk/rebass'>
      GitHub
    </NavLink>
    <NavLink
      mr={3}
      href='https://jxnblk.com'>
      Made by Jxnblk
    </NavLink>
  </Flex>

