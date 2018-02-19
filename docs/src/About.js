import React from 'react'
import {
  Box,
  Lead,
} from 'rebass'
import Container from './Container'

const About = props => (
  <Container my={5}>
    <Box width={[ 1, null, 640 ]}>
      <Lead fontWeight='bold' fontSize={[ 3, 4 ]}>
        Rebass is a library of highly-composable, primitive UI components for React,
        built with styled-components to keep styles isolated and reduce the need to write custom CSS in your application.
        Based upon a configurable design system,
        Rebass’s props API makes building consistent, responsive web apps simpler and faster.
      </Lead>
    </Box>
  </Container>
)

export default About
