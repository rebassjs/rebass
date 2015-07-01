
import React from 'react'
import { Section, Row, Col } from '../..'

class ValueProps extends React.Component {

  render () {
    return (
      <Section>
        <Row>
          <Col sm={6}>
            <h4 className='h3'>
              Component-Centric CSS
            </h4>
            <p className=''>
              Basscss is designed for component-based architecture and doesn’t add the bulky overhead found in other frameworks.
            </p>
          </Col>
          <Col sm={6}>
            <h4 className='h3'>
              Common Styling API
            </h4>
            <p className=''>
              Powerful CSS utilities offer the ability to extend and create custom UI without the need to manage component-specific styles.
            </p>
          </Col>
          <Col sm={6}>
            <h4 className='h3'>
              Just Add State
            </h4>
            <p className=''>
              Each component is a pure render function, ready to be hooked into any application.
            </p>
          </Col>
          <Col sm={6}>
            <h4 className='h3'>
              Prototype and Build Faster
            </h4>
            <p className=''>
              Quickly build out UI and stay focused on the design decisions that matter most. Wireframe, prototype, then ship to production.
            </p>
          </Col>
        </Row>
      </Section>
    )
  }

}

export default ValueProps

