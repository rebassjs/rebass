
import React from 'react'
import {
  theme,
  Banner,
  Close,
  Container,
  Drawer,
  Heading,
  Text,
} from '../../src'

import KitchenSink from './KitchenSink'
import ConfigForm from './ConfigForm'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      ...theme,
      Banner: {
        minHeight: '80vh'
      },
      drawerOpen: true
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.updateContext = this.updateContext.bind(this)
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

  updateContext (state) {
    this.setState(state)
  }

  render () {
    const { drawerOpen } = this.state
    console.log(this.state)

    return (
      <div>
        <Banner
          backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'
          onClick={this.toggleDrawer}>
          <Heading size={0} children='Rebass Demo' />
          <Text children='Configurable example page' />
        </Banner>
        <Container style={{
            transition: 'transform .3s ease-out, margin .2s ease-out',
            // marginRight: drawerOpen ? 0 : 'auto'
            transform: drawerOpen ? 'translateX(192px)' : null
          }}>
          <KitchenSink />
        </Container>
        <Drawer open={drawerOpen}>
          <Close onClick={this.toggleDrawer} />
          <ConfigForm {...this.state} onChange={this.updateContext} />
        </Drawer>
      </div>
    )
  }
}

export default App

