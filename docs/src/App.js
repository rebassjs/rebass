import React from 'react'
import styled from 'styled-components'
import connect from 'refunk'
import { createRouter } from 'rrx'
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

const loading = () => false

import Head from './Head'
import Menu from './Menu'
import NavBar from './NavBar'
import Scripts from './Scripts'
import Home from './Home'

// const Home = Loadable({ loading, loader: () => import('./Home') })
const GettingStarted = Loadable({ loading, loader: () => import('./GettingStarted') })
const PropsView = Loadable({ loading, loader: () => import('./PropsView') })
const GridSystem = Loadable({ loading, loader: () => import('./GridSystem') })
const Theming = Loadable({ loading, loader: () => import('./Theming') })
const Extending = Loadable({ loading, loader: () => import('./Extending') })
const ServerSide = Loadable({ loading, loader: () => import('./ServerSide') })
const ComponentList = Loadable({ loading, loader: () => import('./ComponentList') })
const Component = Loadable({ loading, loader: () => import('./Component') })

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
    requestAnimationFrame(() => {
      this.didMount = true
    })
  }

  render () {
    const { props } = this
    const { pathname } = props.location
    const offset = this.getOffset()

    const rootStyle = {
      transform: `translateY(-${offset}px)`,
      transition: this.didMount ? 'transform .1s ease-out' : null
    }

    return (
      <React.Fragment>
        <Head {...props} />
        <Provider theme={props.theme}>
          <div style={rootStyle}>
            <div ref={r => this.menu = r}>
              <Menu />
            </div>
            <NavBar />
            <div onClick={e => props.update({ menu: false })}>
              <Home pattern='/' />
              <Box
                px={[ 3, 3, 5 ]}
                py={[ 5, 5, ]}>
                <GettingStarted pattern='/getting-started' />
                <PropsView pattern='/props' />
                <GridSystem pattern='/grid-system' />
                <Theming pattern='/theming' />
                <Extending pattern='/extending' />
                <ServerSide pattern='/server-side-rendering' />
                <ComponentList pattern='/components' />
                <Component pattern='/components/:name' />
              </Box>
            </div>
          </div>
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

const Router = createRouter(App)

Router.defaultProps = {
  options: {
    basename: '/'
  }
}

export default Router
