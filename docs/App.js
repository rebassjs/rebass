
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
import NotFound from './NotFound'
import basename from './basename'

// import ComponentIndex from './ComponentIndex'
// import CompDetail from './CompDetail'
// import Demo from './Demo'
// import StyleGuide from './StyleGuide'
// import Themes from './Themes'

const isClient = typeof document !== 'undefined'
const isDev = process.env.NODE_ENV !== 'production'

class App extends React.Component {
  getChildContext () {
    return {
      gridsys: {
        columnCount: 12,
        columnWidth: 224
      },
      rebass: {
        monospace: 'Menlo, Consolas, monospace',
        Heading: {
          fontWeight: 800
        },
        Divider: {
          borderColor: 'inherit'
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
            {/*
            <Match
              exactly
              pattern='/components'
              component={ComponentIndex} />
            <Match
              pattern='/components/:name'
              component={CompDetail} />
            */}
            <Miss component={NotFound} />
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

