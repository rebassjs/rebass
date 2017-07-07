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
import Configuration from './Configuration'
import Components from './Components'
import ExampleList from './ExampleList'
import Customizing from './Customizing'
import CTA from './CTA'
import Footer from './Footer'

const StickySide = styled(Box)`
  display: none;

  @media screen and (min-width: 32em) {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: auto;
  }
`

const App = props => (
  <Provider>
    <NavBar />
    <Header />
    <About />
    <Testimonials />
    <Container>
      <Flex wrap>
        <StickySide w={[ 1, 1/3, 1/4 ]}>
          <SideNav />
        </StickySide>
        <Box w={[ 1, 2/3, 3/4 ]}>
          <Demo />
          <Props />
          <Configuration />
          <Customizing />
          <Components />
          <ExampleList />
          <CTA />
          <Footer />
        </Box>
      </Flex>
    </Container>
  </Provider>
)

const state = {
  xray: false
}

export default createProvider(state)(App)
