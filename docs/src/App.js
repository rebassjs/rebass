import React from 'react'
import styled from 'styled-components'
import { createProvider } from 'funcup'
import { createRouter, Link } from 'rrx'
import {
  Provider,
  Sticky,
  Container,
  Flex,
  Box,
  Border,
} from 'rebass'
import Home from './Home'
import GettingStarted from './GettingStarted'
import PropsView from './PropsView'
import GridSystem from './GridSystem'
import Theming from './Theming'
import Extending from './Extending'
import ServerSide from './ServerSide'
import Component from './Component'
import SideNav from './SideNav'

const StickySide = styled(Box)`
  display: none;

  @media screen and (min-width: 32em) {
    flex: none;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    bottom: 0;
    height: 100vh;
    overflow: auto;
  }
`

const App = props => (
  <Provider theme={theme}>
    <Home pattern='/' />
    {props.location.pathname !== '/' && (
      <Flex>
        <StickySide w={[ 1, 192 ]}>
          <Border right>
            <SideNav {...props} />
          </Border>
        </StickySide>
        <Box flex='0 1 auto' w={[ 1, 'calc(100% - 192px)' ]}>
          <Container
            mt={5}
            pb={6}
            width={1024}>
            <GettingStarted pattern='/getting-started' />
            <PropsView pattern='/props' />
            <GridSystem pattern='/grid-system' />
            <Theming pattern='/theming' />
            <Extending pattern='/extending' />
            <ServerSide pattern='/server-side-rendering' />
            <Component pattern='/components/:name' />
          </Container>
        </Box>
      </Flex>
    )}
  </Provider>
)

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
