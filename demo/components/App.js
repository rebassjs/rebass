
import React from 'react'
import {
  theme,
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

const initialTheme = Object.assign({}, theme)

class App extends React.Component {
  constructor () {
    super()
    this.state = Object.assign({}, theme, demoTheme, {
      drawerOpen: false
    })
    this.toggleDrawer = this.toggleDrawer.bind(this)
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

  resetTheme () {
    console.log('reset', initialTheme)
    this.setState(initialTheme)
  }

  updateContext (state) {
    this.setState(state)
  }

  render () {
    const { fontFamily, color, backgroundColor, drawerOpen } = this.state

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
        <Toolbar>
          <NavItem href='http://jxnblk.com/rebass' children='Rebass' />
          <Space auto />
          <NavItem
            onClick={this.toggleDrawer}
            children='Edit Configuration' />
        </Toolbar>
        <Banner
          backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'
          onClick={this.toggleDrawer}>
          <Heading size={0} children='Rebass Demo' />
          <Text children='Configurable example page' />
        </Banner>
        <Container style={{
            marginLeft: drawerOpen ? 0 : 'auto'
          }}>
          <Block borderLeft padding={32}>
            <Text>
              To adjust the theme used on this page
            </Text>
            <Button onClick={this.toggleDrawer}
              children='Edit the Configuration' />
          </Block>
          <KitchenSink />
        </Container>
        <Drawer open={drawerOpen} position='right'>
          <SectionHeader
            heading='Configuration'>
            <Close onClick={this.toggleDrawer} />
          </SectionHeader>
          <ConfigForm
            {...this.state}
            onChange={this.updateContext}
            reset={this.resetTheme} />
        </Drawer>
      </div>
    )
  }
}

export default App

