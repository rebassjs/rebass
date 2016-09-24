
import React from 'react'
import { Container, Grid } from 'gridsys'
import {
  HeadingLink
} from '../src'

const Themes = () => {
  return (
    <section id='themes'>
      <Container>
        <Grid span={12}>
          <HeadingLink
            href='#themes'
            children='Themes' />
        </Grid>
        <Grid span={2}>
        </Grid>
      </Container>
    </section>
  )
}

export default Themes

