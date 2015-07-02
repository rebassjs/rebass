
import React from 'react'
import { Section, SectionHeader } from '../..'
import Example from './Example.jsx'

class ComponentDocs extends React.Component {

  render () {
    let props = this.props
    return (
      <Section>
        <SectionHeader title={props.name} />
        <p>{props.description}</p>
        {props.examples.map(function(example, i) {
          return (
            <Example key={i}>
              {example}
            </Example>
            )
        })}
        <div>
        </div>
      </Section>
    )
  }

}

ComponentDocs.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  examples: React.PropTypes.array
}

export default ComponentDocs

