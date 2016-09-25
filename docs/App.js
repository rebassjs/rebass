
import React from 'react'
import {
  BrowserRouter,
  ServerRouter,
  createServerRenderContext,
  Match,
  Miss,
  Link
} from 'react-router'
import Nav from './Nav'
import Home from './Home'
import ComponentIndex from './ComponentIndex'
import ComponentDetail from './ComponentDetail'
import NotFound from './NotFound'
import ComponentList from './ComponentList'
import Footer from './Footer'
import basename from './basename'

// import Demo from './Demo'
// import Themes from './Themes'

import StyleGuide from './StyleGuide'

const isClient = typeof document !== 'undefined'
const isDev = process.env.NODE_ENV !== 'production'

class App extends React.Component {
  getChildContext () {
    return {
      gridsys: {
        // columnCount: 12,
        columnCount: 8,
        columnWidth: 224
      },
      rebass: {
        monospace: 'Menlo, Consolas, monospace',
        borderColor: 'inherit',
        Heading: {
          // fontWeight: 800
        },
        Divider: {
          borderBottomColor: 'inherit'
        },
        Pre: {
          fontSize: 12,
        }
      }
    }
  }

  render () {
    const Router = isClient
      ? BrowserRouter
      : ServerRouter

    const context = createServerRenderContext()
    const routerProps = isClient
      ? {
        basename
      }
      : {
        location: '/',
        basename,
        context
      }

    return (
      <div id='app'>
        <Router {...routerProps}>
          <div>
            <Nav />
            <Match
              {...this.props}
              pattern='/'
              exactly
              component={Home} />
            <Match
              exactly
              pattern='/components'
              component={ComponentIndex} />
            <Match
              pattern='/components/:name'
              component={ComponentDetail} />
            <Match
              pattern='/styleguide'
              component={StyleGuide} />
            <Miss component={NotFound} />
            <ComponentList />
            <Footer />
          </div>
        </Router>
      </div>
    )
  }
}

App.childContextTypes = {
  gridsys: React.PropTypes.object,
  rebass: React.PropTypes.object
}

export default App

