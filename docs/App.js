
import React from 'react'
import {
  BrowserRouter,
  ServerRouter,
  createServerRenderContext,
  Match,
  Miss,
  Link
} from 'react-router'
import {
  themes
} from '../src'
import withParams from './withParams'
import Nav from './Nav'
import Home from './Home'
import ComponentIndex from './ComponentIndex'
import ComponentDetail from './ComponentDetail'
import NotFound from './NotFound'
import ComponentList from './ComponentList'
import Footer from './Footer'
import basename from './basename'
import ThemesIndex from './ThemesIndex'

// import Demo from './Demo'

import StyleGuide from './StyleGuide'

const isClient = typeof document !== 'undefined'
const isDev = process.env.NODE_ENV !== 'production'

class App extends React.Component {
  state = {
    theme: 'basic'
  }

  changeTheme = (theme) => {
    this.setState({ theme })
    this.props.push({ theme })
  }

  getChildContext () {
    const { theme } = this.state
    return {
      gridsys: {
        columnCount: 8,
        columnWidth: 224
      },
      rebass: {
        ...themes[theme],
        monospace: 'Menlo, Consolas, monospace'
      }
    }
  }

  componentDidMount () {
    const { theme } = this.props.params
    if (theme) {
      this.setState({ theme })
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

    const config = themes[this.state.theme]

    const sx = {
      root: {
        fontFamily: config.fontFamily,
        color: config.color,
        backgroundColor: config.backgroundColor
      }
    }

    return (
      <div id='app'
        style={sx.root}>
        <Router {...routerProps}>
          <div>
            <Nav
              theme={this.state.theme}
              changeTheme={this.changeTheme} />
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
              pattern='/themes'
              render={(matchProps) => (
                <ThemesIndex
                  changeTheme={this.changeTheme}
                />
              )} />
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

export default withParams(App)

