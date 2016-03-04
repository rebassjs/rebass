
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
  Pre,
  SectionHeader,
  Space,
  Text,
} from '../../src'

import configurations from '../configurations'
  import KitchenSink from './KitchenSink'

import Navbar from './Navbar'
import Header from './Header'
import Intro from './Intro'
import Cards from './Cards'
import DataDemo from './DataDemo'
import ConfigForm from './ConfigForm'
import Modal from './Modal'

class App extends React.Component {
  constructor () {
    super()
    this.state = Object.assign({}, config, configurations.init, {
      drawerOpen: false,
      modalOpen: false,
      repo: {}
    })
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
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

  toggleDrawer () {
    const drawerOpen = !this.state.drawerOpen
    this.setState({ drawerOpen })
  }

  toggleModal () {
    const modalOpen = !this.state.modalOpen
    this.setState({ modalOpen })
  }

  resetTheme () {
    console.log('reset', initialTheme)
    this.setState(initialTheme)
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
        <Navbar
          toggleDrawer={this.toggleDrawer} />
        <Header toggleDrawer={this.toggleDrawer} />
        <Container style={{
            marginLeft: drawerOpen ? 0 : 'auto'
          }}>
          <Intro />
          <Cards {...this.state} />
          <DataDemo
            {...this.state}
            {...this.props} />
          <KitchenSink
            {...this.props}
            toggleOverlay={this.toggleModal} />
        </Container>

        <Pre children={JSON.stringify(this.state, null, 2)} />

        <Drawer
          open={drawerOpen}
          onDismiss={this.toggleDrawer}
          position='right'>
          <Flex align='center'>
            <Space auto />
            <Close onClick={this.toggleDrawer} />
          </Flex>
          <ConfigForm
            {...this.state}
            onChange={this.updateContext}
            reset={this.resetTheme} />
        </Drawer>
        <Modal {...this.state}
          toggleModal={this.toggleModal} />
      </div>
    )
  }
}

export default App

