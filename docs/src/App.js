import React from 'react'
import styled from 'styled-components'
import { createProvider } from 'funcup'
import { createRouter, Link } from 'rrx'
import {
  Provider,
  Sticky,
  Container,
  Flex,
  Box
} from 'rebass'
import Home from './Home'
import GettingStarted from './GettingStarted'
import PropsView from './PropsView'

import Component from './Component'

import SideNav from './SideNav'
import Demo from './Demo'
import Props from './Props'
import ResponsiveStyles from './ResponsiveStyles'
import Colors from './Colors'
import TypographicScale from './TypographicScale'
import Configuration from './Configuration'
import Components from './Components'
import ExampleList from './ExampleList'
import Customizing from './Customizing'
import GridStyled from './GridStyled'
import Footer from './Footer'

const StickySide = styled(Box)`
  display: none;

  @media screen and (min-width: 32em) {
    flex: none;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: auto;
  }
`

const App = props => (
  <Provider theme={theme}>
    <Home pattern='/' />
    {props.location.pathname !== '/' && (
      <Flex>
        <StickySide
          w={[ 1, 160 ]}
          px={3}>
          <SideNav />
        </StickySide>
        <Box
          flex='0 1 auto'
          w={[ 1, 'calc(100% - 160px)' ]}
          pl={[ 0, 3 ]}>
          <Container
            mt={5}
            pb={6}
            width={1024}>
            <GettingStarted pattern='/getting-started' />
            <PropsView pattern='/props' />
            <Component pattern='/components/:name' />
          </Container>
        </Box>
      </Flex>
    )}

    {/*
          <Demo />
          <Props />
          <ResponsiveStyles />
          <Colors />
          <TypographicScale />
          <Configuration />
          <Customizing />
          <GridStyled />
          <Components />
          <ExampleList />
    */}
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
