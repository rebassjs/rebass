
import React from 'react'
import Example from './Example.jsx'
import components from '../components-data.jsx'
import {
  Section,
  SectionHeader,
  Row,
  Col
} from '../..'

class Components extends React.Component {

  render () {
    return (
      <Row>
        <Col sm={8} md={9}>
          {components.map(function(comp, i) {
            return (
              <Section key={i}>
                <SectionHeader title={comp.name} />
                {comp.examples.map(function(example, i) {
                  return (
                    <Example key={i}>
                      {example}
                    </Example>
                  )
                })}
              </Section>
            )
          })}
        </Col>
        <Col sm={4} md={3}>
          <ul className='list-reset m2'>
            {components.map(function(comp, i) {
              return (
                <li key={i}>
                  <a href={'#' + comp.name}
                    className='h5 bold'>
                    {comp.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </Col>
      </Row>
    )
  }

}

export default Components

