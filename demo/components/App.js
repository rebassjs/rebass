
import React from 'react'
import jsonp from 'jsonp'
import { Flex, Box } from 'reflexbox'
import {
  config,
  Banner,
  Block,
  Button,
  Close,
  Container,
  Drawer,
  Heading,
  NavItem,
  Panel,
  PanelHeader,
  SectionHeader,
  Footer,
  Space,
  Text,
} from '../../src'

import init from '../configurations/init'
import configurations from '../configurations'

import Navbar from './Navbar'
import Header from './Header'
import Intro from './Intro'
import Cards from './Cards'
import DataDemo from './DataDemo'
import BlockPanel from './BlockPanel'
import Checkout from './Checkout'
import Headings from './Headings'
import Colors from './Colors'
import Comments from './Comments'
import ConfigForm from './ConfigForm'
import Modal from './Modal'

class App extends React.Component {
  constructor () {
    super()
    this.state = Object.assign({}, config, configurations.basic, {
      drawerOpen: false,
      dropdownOpen: false,
      modalOpen: false,
      config: 'Basic',
      repo: {}
    })
    this.toggle = this.toggle.bind(this)
    this.switchConfig = this.switchConfig.bind(this)
    this.updateContext = this.updateContext.bind(this)
    this.resetTheme = this.resetTheme.bind(this)
  }

  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: this.state
    }
  }

  toggle (key) {
    return (e) => {
      const val = !this.state[key]
      this.setState({ [key]: val })
    }
  }

  switchConfig (key) {
    return (e) => {
      const theme = Object.assign({}, config, configurations[key])
      this.resetTheme(() => {
        this.setState({
          ...theme,
          config: config.name,
          dropdownOpen: false
        })
      })
    }
  }

  resetTheme (cb) {
    console.log('reset')
    this.setState(init, cb)
  }

  updateContext (state) {
    this.setState(state)
  }

  componentDidMount () {
    console.log('mounted')
    jsonp('https://api.github.com/repos/jxnblk/rebass?callback=callback', (err, response) => {
      this.setState({ repo: response.data })
    }).bind(this)
  }

  render () {
    const { fontFamily, color, backgroundColor, drawerOpen, overlayOpen } = this.state

    const css = `
      body {
        font-family: ${fontFamily};
        color: ${color};
        background-color: ${backgroundColor};
      }
    `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <Navbar {...this.state}
          configurations={configurations}
          switchConfig={this.switchConfig}
          toggle={this.toggle} />
        <Header toggle={this.toggle} />
        <Container style={{
            transition: 'transform .3s ease-out',
            transform: drawerOpen ? 'translateX(-20%)' : 'translateX(0)'
          }}>
          <Intro />
          <Cards {...this.state} />
          <DataDemo
            {...this.state}
            {...this.props} />
          <BlockPanel toggle={this.toggle} />
          <Checkout />
          <Headings {...this.state} />
          <Colors {...this.state} />
          <Comments />
          <Footer mt={4}>
            <NavItem
              href='http://jxnblk.com/rebass'
              children='Rebass' />
            <Space auto />
            <NavItem
              small
              href='http://jxnblk.com'
              children='Made by Jxnblk' />
          </Footer>
        </Container>
        <ConfigForm
          {...this.state}
          toggle={this.toggle}
          onChange={this.updateContext}
          reset={this.resetTheme} />
        <Modal {...this.state}
          toggle={this.toggle} />
      </div>
    )
  }
}

export default App

