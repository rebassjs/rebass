
import React from 'react'
import {
  theme,
  Button,
  Toolbar,
  Space,
  NavItem,
  Banner,
  Close,
  Container,
  Drawer,
  Heading,
  SectionHeader,
  Text,
} from '../../src'

import demoTheme from '../demo-theme'
import KitchenSink from './KitchenSink'
import ConfigForm from './ConfigForm'

const initialTheme = Object.assign({}, theme)

class App extends React.Component {
  constructor () {
    super()
    this.state = Object.assign({}, theme, demoTheme, {
      drawerOpen: true
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
    const { drawerOpen } = this.state

    return (
      <div>
        <Toolbar>
          <NavItem children='Rebass' />
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
            marginRight: drawerOpen ? 0 : 'auto'
          }}>
          <KitchenSink />
        </Container>
        <Drawer open={drawerOpen}>
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

