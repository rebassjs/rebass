
import React from 'react'
import { Section, Row, Col } from '../..'

class ValueProps extends React.Component {

  render () {
    return (
      <Section>
        <Row>
          <Col sm={4}>
            <h4 className='h3'>
              Common Styling API
            </h4>
            <p className=''>
              Basscss’s powerful utilities offer the ability to extend and create custom components without the need to manage component-specific styles.
            </p>
          </Col>
          <Col sm={4}>
            <h4 className='h3'>
              Prop
            </h4>
            <p className=''>
            </p>
          </Col>
          <Col sm={4}>
            <h4 className='h3'>
              Just Add State
            </h4>
            <p className=''>
              Limited to pure render functions, these “dumb” components promote quickly building out UI in any application
            </p>
          </Col>
        </Row>
      </Section>
    )
  }

}

export default ValueProps

