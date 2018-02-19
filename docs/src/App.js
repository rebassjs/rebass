import React from 'react'
import styled from 'styled-components'
import connect from 'refunk'
import {
  BrowserRouter,
  StaticRouter,
  Route
} from 'react-router-dom'
import Loadable from 'react-loadable'
import pkg from '../../package.json'

import {
  Provider,
  Sticky,
  Container,
  Flex,
  Box,
  Border,
  theme,
} from 'rebass'

import Head from './Head'
import Menu from './Menu'
import ScrollTop from './ScrollTop'
import NavBar from './NavBar'
import Scripts from './Scripts'

const isServer = typeof document === undefined
const Router = isServer ? StaticRouter : BrowserRouter
const loading = () => false

const Home = Loadable({ loading, loader: () => import('./Home') })
const GettingStarted = Loadable({ loading, loader: () => import('./GettingStarted') })
const PropsView = Loadable({ loading, loader: () => import('./PropsView') })
const GridSystem = Loadable({ loading, loader: () => import('./GridSystem') })
const Theming = Loadable({ loading, loader: () => import('./Theming') })
const Extending = Loadable({ loading, loader: () => import('./Extending') })
const ServerSide = Loadable({ loading, loader: () => import('./ServerSide') })
const ComponentList = Loadable({ loading, loader: () => import('./ComponentList') })
const Component = Loadable({ loading, loader: () => import('./Component') })

const App = connect(class extends React.Component {
  render () {
    const {
      update,
      basename,
      pathname,
      pkg,
      theme,
      menu,
    } = this.props

    return (
      <React.Fragment>
        <Head pkg={pkg} />
        <Provider theme={theme}>
          <Router
            context={{}}
            basename={basename}
            location={pathname}>
            <ScrollTop>
              <Menu menu={menu} />
              <NavBar />
              <div onClick={e => update({ menu: false })}>
                <Route
                  exact
                  path='/'
                  render={p => <Home {...p} />}
                />
                <Box
                  px={[ 3, 3, 5 ]}
                  py={[ 5, 5, ]}>
                  <Route component={GettingStarted} path='/getting-started' />
                  <Route component={PropsView} path='/props' />
                  <Route component={GridSystem} path='/grid-system' />
                  <Route component={Theming} path='/theming' />
                  <Route component={Extending} path='/extending' />
                  <Route component={ServerSide} path='/server-side-rendering' />
                  <Route component={Component} path='/components/:name' />
                  <Route component={ComponentList} exact path='/components' />
                </Box>
              </div>
            </ScrollTop>
          </Router>
        </Provider>
        <Scripts />
      </React.Fragment>
    )
  }
})

App.defaultProps = {
  pkg,
  menu: false,
  xray: false,
  modal: false,
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

export default App
