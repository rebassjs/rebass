
import React from 'react'
import { Container, GridGroup, Grid } from 'gridsys'
import {
  HeadingLink,
  Text,
  List
} from '../src'

const Features = () => {
  return (
    <section id='features'>
      <Container>
        <Grid span={8}>
          <HeadingLink
            href='#features'
            children='Features' />
        </Grid>
        <Grid span={4}>
          <Text size={3}>
            Rebass is a React UI component library that uses inline styles to avoid CSS dependencies and prevent leaky global styles from affecting an application. Rebass components inherit styles where appropriate and can be themed/customized using React Context. Rebass components are built as stateless functional components and modeled as presentational components. With unit tests for each component, Rebass is great for prototyping and ready for production.
          </Text>
        </Grid>
        <GridGroup span={6}>
          <Grid span={2}>
            <List flush>
              <Text bold>
                Uses inline styles
              </Text>
              <Text bold>
                No CSS dependencies
              </Text>
              <Text bold>
                No leaky global styles
              </Text>
              <Text bold>
                Promotes consistent styling
              </Text>
            </List>
          </Grid>
          <Grid span={2}>
            <List flush>
              <Text bold>
                Built for pixel-perfect alignment
              </Text>
              <Text bold>
                Works with any application architecture
              </Text>
              <Text bold>
                Promotes separation of business logic and style
              </Text>
              <Text bold>
                Convenient style props for margin, padding, and colors
              </Text>
            </List>
          </Grid>
          <Grid span={2}>
            <List flush>
              <Text bold>
                Customizable themes using React context
              </Text>
              <Text bold>
                Great for prototyping
              </Text>
              <Text bold>
                Production ready
              </Text>
              <Text bold>
                Unit tested
              </Text>
            </List>
          </Grid>
        </GridGroup>
      </Container>
    </section>
  )
}

export default Features

