import React from 'react'
import { Link as RLink } from 'rrx'
import {
  Box,
  Divider,
  NavLink
} from 'rebass'
import { components } from './examples'

const Link = props => (
  <NavLink
    is={RLink}
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
      <Link href='/' children='Rebass' />
      <Link href='/getting-started' children='Getting Started' />
      <Link href='/props' children='Props' />
      <Link name='Demo' />
      <Link name='Responsive Styles' />
      <Link name='Colors' />
      <Link name='Typographic Scale' />
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
