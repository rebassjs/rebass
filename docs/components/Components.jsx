
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

class Components extends React.Component {

  render () {
    let props = this.props
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
            <Sticky bottom={64}>
              <ul className='list-reset'>
                {components.map(function(comp, i) {
                  let active = comp.name === props.activeSection
                  let styles = {
                    li: {
                      paddingLeft: 8,
                      borderLeftWidth: 4,
                      borderLeftStyle: 'solid',
                      borderLeftColor: active ? 'rgba(0,0,0,.25)' : 'transparent'
                    }
                  }
                  return (
                    <li key={i} style={styles.li}>
                      <a href={'#' + comp.name}
                        className={'h5 bold color-inherit'}>
                        {comp.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </Sticky>
          </Col>
        </Row>
      </div>
    )
  }

}

export default Components

