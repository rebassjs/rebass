import React from 'react'
import {
  Container,
  Lead,
} from 'rebass'

const About = props => (
  <Container my={5}>
    <Lead
      f={[ 3, 4 ]}
      width={[ 1, null, '31em' ]}>
      Rebass is a library of highly-composable, primitive UI components for React,
      built with styled-components to keep styles isolated and reduce the need to write custom CSS in your application.
      Based upon a configurable design system,
      Rebass‘s props API makes building consistent, responsive web apps simpler and faster.
    </Lead>
  </Container>
)

export default About
