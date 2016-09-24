
import React from 'react'
import { Link } from 'react-router'
import { Container, Grid } from 'gridsys'
import { Heading, NavItem } from '../src'
import Rule from './Rule'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Rule m={3} />
        <Grid span={2}>
          <Heading
            level={4}
            mb={2}
            children='Rebass' />
          <NavItem
            px={0}
            is={Link}
            to='/'
            children='Home' />
          <NavItem
            px={0}
            href='#'
            children='Components' />
          <NavItem
            px={0}
            href='#'
            children='Theme' />
          <NavItem
            px={0}
            href='#'
            children='Demo' />
          <NavItem
            px={0}
            href='https://github.com/jxnblk/rebass'
            children='GitHub' />
          <NavItem
            px={0}
            href='https://npmjs.com/package/rebass'
            children='npm' />
        </Grid>
        <Grid span={2}>
          <Heading
            level={4}
            mb={2}
            children='Related' />
          <NavItem
            px={0}
            href='http://jxnblk.com/reflexbox'
            children='Reflexbox' />
          <NavItem
            px={0}
            href='http://jxnblk.com/reline'
            children='Reline' />
          <NavItem
            px={0}
            href='http://jxnblk.com/react-geomicons'
            children='React Geomicons' />
          <NavItem
            px={0}
            href='http://jxnblk.com/gridsys'
            children='Gridsys' />
          <NavItem
            px={0}
            href='http://jxnblk.com/gx'
            children='Gx' />
          <NavItem
            px={0}
            href='http://jxnblk.com/rgx'
            children='Rgx' />
          <NavItem
            px={0}
            href='https://github.com/jxnblk/react-css-grid'
            children='React CSS Grid' />
        </Grid>
        <Grid span={12} />
      </Container>
    </footer>
  )
}

export default Footer

