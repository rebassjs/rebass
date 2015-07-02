
import React from 'react'
import Example from './Example.jsx'
import components from '../components-data.jsx'
import {
  Section,
  SectionHeader,
  Row,
  Col
} from '../..'
import ScrollFix from './ScrollFix.jsx'
import ComponentDocs from './ComponentDocs.jsx'

class Components extends React.Component {

  render () {
    return (
      <div>
        <SectionHeader title='Components' />
        <Row>
          <Col sm={9} md={10}>
            {components.map(function(comp, i) {
              return (
                <ComponentDocs key={i} {...comp} />
              )
            })}
          </Col>
          <Col sm={3} md={2}>
            <ScrollFix bottom={64}>
              <ul className='list-reset'>
                {components.map(function(comp, i) {
                  return (
                    <li key={i}>
                      <a href={'#' + comp.name}
                        className='h5 bold color-inherit'>
                        {comp.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </ScrollFix>
          </Col>
        </Row>
      </div>
    )
  }

}

export default Components

