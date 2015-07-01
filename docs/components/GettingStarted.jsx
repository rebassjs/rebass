
import React from 'react'
import { Section, SectionHeader, Row, Col } from '../..'

class GettingStarted extends React.Component {

  render () {
    return (
      <Section>
        <SectionHeader
          title='Getting Started'
          id='getting-started' />
        <h3>Install</h3>
        <pre>npm i rebass</pre>
        <h3>Import CSS</h3>
        <Row>
          <Col sm={5}>
            <p>In a CSS file using cssnext</p>
            <pre>@import 'rebass';</pre>
          </Col>
          <Col sm={2}>
            <b className='h3 caps muted'>or</b>
          </Col>
          <Col sm={5}>
            <p>Using cssnext-loader with webpack</p>
            <pre>import css from 'rebass/rebass.css'</pre>
          </Col>
        </Row>
        <h3>Import & Use Components</h3>
        <pre>{'import { Button } from \'rebass\''}</pre>
        <pre>{'<Button>Button</Button>'}</pre>
      </Section>
    )
  }

}

export default GettingStarted

