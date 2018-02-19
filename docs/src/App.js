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
  constructor () {
    super()

    this.getOffset = () => {
      if (this.props.menu) return 0
      if (!this.menu) return 0
      return this.menu.getBoundingClientRect().height
    }
  }

  componentDidMount () {
    console.log('didMount')
      this.didMount = true
    requestAnimationFrame(() => {
    })
  }

  render () {
    const { props } = this
    const { basename, pathname } = this.props
    const offset = this.getOffset()

    console.log(offset, this.didMount)
    const rootStyle = {
      transform: `translateY(-${offset}px)`,
      transition: this.didMount ? 'transform .1s ease-out' : null
    }

    return (
      <React.Fragment>
        <Head {...props} />
        <Provider theme={props.theme}>
          <Router
            context={{}}
            basename={basename}
            location={pathname}>
            <div style={rootStyle}>
              <div ref={r => this.menu = r}>
                <Menu offset={offset} />
              </div>
              <NavBar />
              <div onClick={e => props.update({ menu: false })}>
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
            </div>
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
