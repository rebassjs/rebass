
import React from 'react'
import Example from './Example.jsx'
import components from '../components-data.jsx'
import {
  Section,
  SectionHeader,
  Row,
  Col
} from '../..'
import Sticky from './Sticky.jsx'
import ComponentDocs from './ComponentDocs.jsx'
import ComponentNav from './ComponentNav.jsx'

class Components extends React.Component {

  constructor () {
    super ()
    this.state = {
      height: 2048
    }
  }

  componentDidMount () {
    if (typeof window !== 'undefined') {
      let container = React.findDOMNode(this.refs.container)
      this.setState({
        height: container.offsetHeight
      })
    }
  }

  render () {
    let props = this.props
    return (
      <div>
        <SectionHeader title='Components' />
        <Row ref='container'>
          <Col sm={9} md={9}>
            {components.map(function(comp, i) {
              return (
                <ComponentDocs key={i} {...comp} />
              )
            })}
          </Col>
          <Col sm={3} md={3}>
            <Sticky height={this.state.height}>
              <ComponentNav {...this.props}
                components={components} />
            </Sticky>
          </Col>
        </Row>
      </div>
    )
  }

}

export default Components

