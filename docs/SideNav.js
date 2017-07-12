import React from 'react'
import {
  Box,
  Divider,
  NavLink
} from 'rebass'
import { components } from './examples'

const Link = props => (
  <NavLink
    href={'#' + props.name}
    children={props.name}
    {...props}
    w={1}
    py={1}
  />
)

const SideNav = props => (
  <nav>
    <Box
      py={3}
      ml={-2}
      my={4}>
      <Link href='#' children='Top' />
      <Link name='Demo' />
      <Link name='Props' />
      <Link name='Responsive Styles' />
      <Link name='Configuration' />
      <Link name='Customizing' />
      <Link name='Grid Styled' />
      <Divider my={3} color='gray3' />
      {components.map(name => (
        <Link
          key={name}
          name={name}
        />
      ))}
      <Divider my={3} color='gray3' />
      <Link href='https://github.com/jxnblk/rebass' children='GitHub' />
      <Link href='#' children='Top' />
    </Box>
  </nav>
)

export default SideNav
