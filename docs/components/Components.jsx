
import React from 'react'
import Example from './Example.jsx'
import components from '../components-data.jsx'
import {
  Section,
  SectionHeader,
  Flex,
  FlexItem,
  Row,
  Col
} from '../..'
import ScrollFix from './ScrollFix.jsx'

class Components extends React.Component {

  render () {
    return (
      <Flex sm top>
        <FlexItem auto>
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
        </FlexItem>
        <FlexItem noshrink>
          <ScrollFix>
            <ul className='list-reset mt4'>
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
          </ScrollFix>
        </FlexItem>
      </Flex>
    )
  }

}

export default Components

