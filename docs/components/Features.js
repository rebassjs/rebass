
import React from 'react'
import {
  config,
  Block,
  Pre,
  Section,
  SectionHeader
} from '../../src'

const Features = () => (
  <Section>
    <SectionHeader
      heading='Getting Started' />
    <p style={{ fontSize: config.fontSizes[3] }}>
      Rebass is a React UI component library that uses inline styles to avoid CSS dependencies and prevent leaky global styles from affecting an application.
      Rebass components inherit styles where appropriate and can be customized using <a href='https://facebook.github.io/react/docs/context.html'>React Context</a>.
      Rebass components are built as stateless functional components and modeled as <a href='https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ah4312963'>presentational components</a>.
      With unit tests for each component, Rebass is great for prototyping and ready for production.
    </p>
    <p style={{ fontSize: config.fontSizes[3] }}>
      <a href='demo'>View the demo</a> or read the component documentation below to get started.
    </p>
    <Pre children='npm i rebass' />
  </Section>
)

export default Features

