
import React from 'react'
import { Link } from 'react-router'
import { Flex } from 'reflexbox'
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
      to: '/demo',
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

  const themeKeys = Object.keys(themes)

  const sx = {
    select: {
      flex: 'none'
    }
  }

  return (
    <Container>
      <Toolbar
        px={3}
        py={2}
        color='inherit'
        backgroundColor='transparent'>
        <Flex wrap auto>
          {links.map((link, i) => (
            <NavItem
              {...link}
              px={0}
              mr={3}
              key={i}
            />
          ))}
        </Flex>
        <Space auto />
        <Select
          name='theme'
          label='Theme'
          hideLabel
          mb={0}
          style={sx.select}
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

