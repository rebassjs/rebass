import React from 'react'
import styled from 'styled-components'
import { createProvider } from 'funcup'
import {
  Provider,
  Sticky,
  Container,
  Flex,
  Box
} from 'rebass'
import NavBar from './NavBar'
import Header from './Header'
import About from './About'
import Testimonials from './Testimonials'
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
import CTA from './CTA'
import Footer from './Footer'

import XRay from 'react-x-ray'

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
    <NavBar />
    <Header />
    <About />
    <Testimonials />
    <Container>
      <Flex wrap={[ true, false ]}>
        <StickySide
          w={[ 1, 160 ]}
          pr={3}>
          <SideNav />
        </StickySide>
        <Box
          flex='0 1 auto'
          w={[ 1, 'calc(100% - 160px)' ]}
          pl={[ 0, 3 ]}>
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
          <CTA />
          <Footer />
        </Box>
      </Flex>
    </Container>
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

export default createProvider(state)(App)
