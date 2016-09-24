
import React from 'react'
import { Container, Grid } from 'gridsys'
import { Text } from '../src'

const Intro = () => {
  return (
    <section>
      <Container>
        <Grid span={4}>
          <Text size={3}>
            Rebass is a React UI component library that uses inline styles to avoid CSS dependencies and prevent leaky global styles from affecting an application. Rebass components inherit styles where appropriate and can be themed/customized using React Context. Rebass components are built as stateless functional components and modeled as presentational components. With unit tests for each component, Rebass is great for prototyping and ready for production.
          </Text>
        </Grid>
      </Container>
    </section>
  )
}

export default Intro

