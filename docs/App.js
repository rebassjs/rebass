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
import Demo from './Demo'
import Props from './Props'
import Configuration from './Configuration'
import ComponentNav from './ComponentNav'
import ExampleList from './ExampleList'
import Customizing from './Customizing'
import CTA from './CTA'
import Footer from './Footer'

const Sidenav = styled(Box)`
  @media screen and (min-width: 32em) {
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
    <Container>
      <Flex wrap>
        <Sidenav w={[ 1, 1/3, 1/4 ]}>
          <ComponentNav />
        </Sidenav>
        <Box w={[ 1, 2/3, 3/4 ]}>
          <Demo />
          <Props />
          <Configuration />
          <Customizing />
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
