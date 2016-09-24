
import React from 'react'
import { Container, Grid } from 'gridsys'
import {
  HeadingLink,
  Blockquote,
} from '../src'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <Container>
        <Grid span={12}>
          <HeadingLink
            href='#testimonials'
            children='Testimonials' />
        </Grid>
        <Grid span={2}>
          <Blockquote
            href='https://twitter.com/sharifsbeat/status/775263944634167296'
            source='A. Sharif'>
            This stuff is amazing.
            Rebass, Reflexbox, Basscss.
            Developing towards a pure UI
          </Blockquote>
        </Grid>
        <Grid span={2}>
          <Blockquote
            href='https://twitter.com/estejs/status/776494239689674752'
            source='Este.js'>
              Reflexbox and Rebass = the typography "boilerplate" I was waiting for years
          </Blockquote>
        </Grid>
      </Container>
    </section>
  )
}

export default Testimonials

