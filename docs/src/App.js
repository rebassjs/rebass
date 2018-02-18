import React from 'react'
import styled from 'styled-components'
import connect from 'refunk'
import { createRouter, Link } from 'rrx'
import Webfont from 'ok-webfont'

import {
  Provider,
  Sticky,
  Container,
  Flex,
  Box,
  Border,
  theme,
} from 'rebass'
import NavBar from './NavBar'
import Home from './Home'
import GettingStarted from './GettingStarted'
import PropsView from './PropsView'
import GridSystem from './GridSystem'
import Theming from './Theming'
import Extending from './Extending'
import ServerSide from './ServerSide'
import ComponentList from './ComponentList'
import Component from './Component'
import SideNav from './SideNav'

const StickySide = styled(Box)`
  display: none;

  @media screen and (min-width: 32em) {
    flex: none;
    order: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    bottom: 0;
    height: 100vh;
    overflow: auto;
  }
`

const CSS = props => (
  <style
    dangerouslySetInnerHTML={{
      __html: props.css
    }}
  />
)
CSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}'
}

const App = connect(props => {
  const { pathname } = props.location
  console.log(props)

  return (
    <React.Fragment>
      <head>
        <title>Rebass</title>
        <meta name='viewport'
          content='width=device-width,initial-scale=0,viewport-fit=cover'
        />
        <CSS />
        <Webfont font='Roboto Mono' />
      </head>
      <Provider theme={props.theme}>
        <NavBar
          bg={pathname === '/' ? 'transparent' : 'black'}
        />
        <Home pattern='/' />
        <Flex flexWrap={[ 'wrap', 'nowrap' ]}>
          <Box
            flex='1 1 auto'
            width={1}
            order={[ null, 2 ]}
            px={[ 3, 3, 5 ]}
            py={[ 5, 5, 6 ]}>
              <GettingStarted pattern='/getting-started' />
              <PropsView pattern='/props' />
              <GridSystem pattern='/grid-system' />
              <Theming pattern='/theming' />
              <Extending pattern='/extending' />
              <ServerSide pattern='/server-side-rendering' />
              <ComponentList pattern='/components' />
              <Component pattern='/components/:name' />
          </Box>
          {pathname !== '/' && (
            <StickySide w={[ 1, 192 ]}>
              <Border right>
                <SideNav {...props} />
              </Border>
            </StickySide>
          )}
        </Flex>
      </Provider>
    </React.Fragment>
  )
})

App.defaultProps = {
  xray: false,
  overlay: false,
  drawer: false,
  checked: false,
  fixed: false,
  theme: {
    ...theme,
    maxWidths: [
      1280
    ]
  },
}

const Router = createRouter(App)

Router.defaultProps = {
  options: {
    basename: '/'
  }
}

export default Router
