
import React from 'react'
import { Link } from 'react-router'
import { Container, Grid } from 'gridsys'
import {
  Toolbar,
  NavItem,
  Space
} from '../src'

const Nav = () => {
  const links = [
    {
      is: Link,
      to: '/',
      children: 'Home'
    },
    {
      href: '#',
      children: 'Components'
    },
    {
      href: '#',
      children: 'Themes'
    },
    {
      href: '#',
      children: 'Demo'
    },
    {
      href: 'https://github.com/jxnblk/rebass',
      children: 'GitHub'
    },
    {
      href: 'https://npmjs.com/package/rebass',
      children: 'npm'
    }
  ]

  const sx = {
    toolbar: {
      flexWrap: 'wrap'
    }
  }

  return (
    <Container>
      <Toolbar
        px={3}
        py={2}
        style={sx.toolbar}
        color='black'
        backgroundColor='white'>
        {links.map((link, i) => (
          <NavItem
            {...link}
            key={i}
          />
        ))}
      </Toolbar>
    </Container>
  )
}

export default Nav

