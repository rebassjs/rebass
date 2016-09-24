
import React from 'react'
import { Container, Grid } from 'gridsys'
import {
  HeadingLink,
  Text,
  List
} from '../src'

const HOCSection = () => {
  return (
    <section id='hoc'>
      <Container>
        <Grid span={12}>
          <HeadingLink
            href='#hoc'
            children='Higher Order Component' />
        </Grid>
        <Grid span={2}>
          <Text>
            Each Rebass component is wrapped with the <code>withRebass</code> higher order component, which provides the theme object through context and handles several style shorthand props.
          </Text>
        </Grid>
        <Grid span={2}>
          <Text>
            Every component in Rebass has the following props available to quickly style and lay out views:
          </Text>
          <List flush>
            <code>m–my</code>
            <code>p–py</code>
            <code>color</code>
            <code>backgroundColor</code>
            <code>rounded</code>
            <code>circle</code>
            <code>pill</code>
          </List>
        </Grid>
      </Container>
    </section>
  )
}

export default HOCSection

