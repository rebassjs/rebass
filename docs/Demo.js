
import React from 'react'
import jsonp from 'jsonp'
import assign from 'object-assign'
import { Flex, Box } from 'reflexbox'
import DemoHeader from './DemoHeader'
import DemoIntro from './DemoIntro'
import DemoCards from './DemoCards'
import DemoData from './DemoData'
import DemoBlockPanel from './DemoBlockPanel'
import DemoCheckout from './DemoCheckout'
import DemoForms from './DemoForms'
import DemoHeadings from './DemoHeadings'
import DemoColors from './DemoColors'
import DemoModal from './DemoModal'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      modalOpen: false,
      repo: {}
    }
    this.toggle = this.toggle.bind(this)
    this.updateContext = this.updateContext.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  toggle (key) {
    return (e) => {
      const val = !this.state[key]
      this.setState({ [key]: val })
    }
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
      overlayOpen
    } = this.state

    return (
      <div>
        <DemoHeader toggle={this.toggle} />
        <DemoIntro />
        <DemoCards />
        <DemoData
          {...this.state}
          {...this.props} />
        <DemoBlockPanel toggle={this.toggle} />
        <DemoCheckout />
        <DemoForms />
        <DemoHeadings />
        <DemoColors />
        <DemoModal {...this.state}
          toggle={this.toggle} />
      </div>
    )
  }
}

export default App

