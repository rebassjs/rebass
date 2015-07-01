
import React from 'react'
import Example from './Example.jsx'
import components from '../components-data.jsx'
import {
  Section,
  SectionHeader,
} from '../..'

class Components extends React.Component {

  render () {
    return (
      <div>
        <ul className='list-reset m2 fixed top-0 right-0'>
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
      </div>
    )
  }

}

export default Components

