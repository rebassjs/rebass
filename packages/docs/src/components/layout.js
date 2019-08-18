import React, { useState, useRef } from 'react'
import { Global } from '@emotion/core'
import { Box, Flex } from 'rebass'
import { Sidenav, Pagination } from '@theme-ui/sidenav'
import Head from './head'
import SkipLink from './skip-link'
import Header from './header'
import Footer from './footer'
import Nav from './nav'
import EditLink from './edit-link'

const Sidebar = props =>
  <Flex>
    <Box
      as={Sidenav}
      ref={props.nav}
      open={props.open}
      onClick={e => {
        props.setMenu(false)
      }}
      onBlur={e => {
        props.setMenu(false)
      }}
      onFocus={e => {
        props.setMenu(true)
      }}
      sx={{
        width: [ 256, 256, 320 ],
        flex: 'none',
        px: 3,
        mt: [64, 0],
        pb: 3,
        'li > ul > li > a': {
          pl: '24px',
        }
      }}>
      <Nav />
    </Box>
    <Box
      sx={{
        width: '100%',
        minWidth: 0,
        maxWidth: 768,
        minHeight: 'calc(100vh - 64px)',
        mx: 'auto',
        px: [ 3, 4 ],
        pb: 5,
      }}>
      {props.children}
      <EditLink my={5}>
        Edit this page on GitHub
      </EditLink>
      <Nav
        pathname={props.location.pathname}
        components={{
          wrapper: Pagination
        }}
      />
    </Box>
  </Flex>

export default (props) => {
  const fullwidth = props.location.pathname === '/'
  const [ menu, setMenu ] = useState(false)
  const nav = useRef(null)

  return (
    <Box sx={{
      variant: 'styles.root'
    }}>
      <SkipLink />
      <Global
        styles={{
          body: { margin: 0 }
        }}
      />
      <Head {...props} />
      <Header
        fullwidth={fullwidth}
        menu={menu}
        setMenu={setMenu}
        nav={nav}
      />
      {!fullwidth ? (
        <Sidebar
          {...props}
          nav={nav}
          open={menu}
          setMenu={setMenu}>
          <main id='content'>
            {props.children}
          </main>
        </Sidebar>
      ) : (
        <main id='content'>
          {props.children}
        </main>
      )}
      <Footer />
    </Box>
  )
}
