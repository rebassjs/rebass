import React from 'react'
import styled from 'styled-components'
import { createProvider } from 'refunk'
import { createRouter, Link } from 'rrx'
import {
  Provider,
  Sticky,
  Container,
  Flex,
  Box,
  Border,
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
  // display: none;

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

const App = props => {
  const { pathname } = props.location

  return (
    <Provider theme={theme}>
      <NavBar
        bg={pathname === '/' ? 'transparent' : 'black'}
      />
      <Home pattern='/' />
      <Flex wrap>
        <Box
          flex='0 1 auto'
          order={[ null, 2 ]}
          w={[ 1, 'calc(100% - 192px)' ]}>
          <Container
            mt={6}
            px={[ 3, 3, 4 ]}
            pb={3}
            maxWidth={1024}>
            <GettingStarted pattern='/getting-started' />
            <PropsView pattern='/props' />
            <GridSystem pattern='/grid-system' />
            <Theming pattern='/theming' />
            <Extending pattern='/extending' />
            <ServerSide pattern='/server-side-rendering' />
            <ComponentList pattern='/components' />
            <Component pattern='/components/:name' />
          </Container>
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
  )
}

const theme = {
  maxWidth: 1280
}

const state = {
  xray: false,
  overlay: false,
  drawer: false,
  checked: false,
  fixed: false,
}

export default createProvider(state)(createRouter(App))
