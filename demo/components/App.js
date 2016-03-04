
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  config,
  Fixed,
  Overlay,
  Panel,
  PanelHeader,
  Banner,
  Block,
  Button,
  Close,
  Container,
  Drawer,
  Heading,
  NavItem,
  SectionHeader,
  Space,
  Text,
  Toolbar
} from '../../src'

import demoTheme from '../demo-theme'
import KitchenSink from './KitchenSink'
import ConfigForm from './ConfigForm'

const initialTheme = Object.assign({}, config)

class App extends React.Component {
  constructor () {
    super()
    this.state = Object.assign({}, config, demoTheme, {
      drawerOpen: false,
      overlayOpen: false
    })
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.toggleOverlay = this.toggleOverlay.bind(this)
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

  toggleOverlay () {
    const overlayOpen = !this.state.overlayOpen
    this.setState({ overlayOpen })
  }

  resetTheme () {
    console.log('reset', initialTheme)
    this.setState(initialTheme)
  }

  updateContext (state) {
    this.setState(state)
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
        <Fixed top left right zIndex={1}>
          <Toolbar style={{ opacity: .875 }}>
            <NavItem href='http://jxnblk.com/rebass' children='Rebass' />
            <Space auto />
            <NavItem
              onClick={this.toggleDrawer}
              children='Edit Configuration' />
          </Toolbar>
        </Fixed>
        <Banner
          style={{
            paddingTop: 48,
            backgroundAttachment: 'fixed'
          }}
          backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'
          onClick={this.toggleDrawer}>
          <Heading size={1} big children='Rebass Demo' />
          <Text children='Configurable example page' />
          <Box py={2}>
            <Button
              big
              onClick={this.toggleDrawer}
              children='Edit Configuration' />
          </Box>
        </Banner>
        <Container style={{
            marginLeft: drawerOpen ? 0 : 'auto'
          }}>
          <KitchenSink toggleOverlay={this.toggleOverlay} />
        </Container>
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
        <Overlay
          open={overlayOpen}
          onDismiss={this.toggleOverlay}>
            <Panel theme='info'>
              <PanelHeader>
                Hello Overlay
                <Space auto />
                <Close onClick={this.toggleOverlay} />
              </PanelHeader>
              This is a Panel inside an Overlay.
            </Panel>
        </Overlay>
      </div>
    )
  }
}

export default App

