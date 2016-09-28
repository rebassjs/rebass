
// WIP moving demo over

import React from 'react'
import jsonp from 'jsonp'
import assign from 'object-assign'
import { Flex, Box } from 'reflexbox'
import {
  theme,
  themes,
  Container
} from '../src'
import themeReset from './theme-reset'

// import Navbar from './Navbar'
import DemoHeader from './DemoHeader'
import DemoIntro from './DemoIntro'
import DemoCards from './DemoCards'
import DemoData from './DemoData'
import DemoBlockPanel from './DemoBlockPanel'
import DemoCheckout from './DemoCheckout'
import DemoForms from './DemoForms'
// import Headings from './Headings'
// import Colors from './Colors'
// import Comments from './Comments'
// import MegaFooter from './MegaFooter'
import DemoConfigForm from './DemoConfigForm'
import DemoModal from './DemoModal'

class App extends React.Component {
  constructor () {
    super()
    // to do: consider handling this state in App
    this.state = assign({},
      theme,
      // init?
      // configurations.basic,
      {
        drawerOpen: false,
        modalOpen: false,
        theme: 'basic',
        repo: {}
      }
    )
    this.toggle = this.toggle.bind(this)
    this.switchConfig = this.switchConfig.bind(this)
    this.updateContext = this.updateContext.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetTheme = this.resetTheme.bind(this)
  }

  static childContextTypes = {
    // rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      // rebass: this.state
    }
  }

  toggle (key) {
    return (e) => {
      const val = !this.state[key]
      this.setState({ [key]: val })
    }
  }

  switchConfig (key) {
    const theme = assign({}, theme, themes[key])
    console.log(theme.name, key)
    this.resetTheme(() => {
      console.log('theme reset', key)
      this.setState({
        ...theme,
        theme: key
      })
    })
  }

  resetTheme (cb) {
    this.setState(themeReset, cb)
  }

  updateContext (state) {
    this.setState(state)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount () {
    jsonp('https://api.github.com/repos/jxnblk/rebass?callback=callback', (err, response) => {
      this.setState({ repo: response.data })
    }).bind(this)
  }

  render () {
    const {
      fontFamily,
      fontWeight,
      letterSpacing,
      color,
      backgroundColor,
      drawerOpen,
      overlayOpen
    } = this.state

    return (
      <div style={{
          fontFamily,
          fontWeight,
          letterSpacing,
          color,
          backgroundColor
        }}>
        <DemoHeader toggle={this.toggle} />
        <Container style={{
            transition: 'transform .3s ease-out',
            transform: drawerOpen ? 'translateX(-20%)' : 'translateX(0)'
          }}>
          <DemoIntro />
          <DemoCards />
          <DemoData
            {...this.state}
            {...this.props} />
          <DemoBlockPanel toggle={this.toggle} />
          <DemoCheckout />
          <DemoForms />
          {/*
          <Headings {...this.state} />
          <Colors {...this.state} />
          <Comments />
          */}
        </Container>
        <DemoConfigForm
          {...this.state}
          themes={themes}
          toggle={this.toggle}
          onChange={this.updateContext}
          switchConfig={this.switchConfig}
          reset={this.resetTheme} />
        {/*
        <MegaFooter {...this.state} />
        */}
        <DemoModal {...this.state}
          toggle={this.toggle} />
      </div>
    )
  }
}

export default App

