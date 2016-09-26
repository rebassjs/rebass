
import React from 'react'
import { Link } from 'react-router'
import { Container, Grid } from 'gridsys'
import {
  Toolbar,
  NavItem,
  Space,
  Select,
  themes
} from '../src'

const Nav = ({ theme, changeTheme }) => {
  const links = [
    {
      is: Link,
      to: '/',
      children: 'Home'
    },
    {
      is: Link,
      to: '/components',
      children: 'Components'
    },
    {
      is: Link,
      to: '/themes',
      children: 'Themes'
    },
    /*
    {
      href: '#',
      children: 'Demo'
    },
    */
    {
      href: 'https://github.com/jxnblk/rebass',
      children: 'GitHub'
    },
    {
      href: 'https://npmjs.com/package/rebass',
      children: 'npm'
    }
  ]

  const themeKeys = Object.keys(themes)
    .map(key => ({
      value: key,
      children: key
    }))

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
        color='inherit'
        backgroundColor='transparent'>
        {links.map((link, i) => (
          <NavItem
            {...link}
            px={0}
            mr={3}
            key={i}
          />
        ))}
        <Space auto />
        <Select
          name='theme'
          label='Theme'
          hideLabel
          m={0}
          value={theme}
          onChange={e => {
            changeTheme(e.target.value)
          }}
          options={themeKeys}
        />
      </Toolbar>
    </Container>
  )
}

export default Nav

