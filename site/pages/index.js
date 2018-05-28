import React from 'react'
import { Container } from 'rebass'
import Hero from '../src/Hero'
import Intro from '../src/Intro'
import Footer from '../src/Footer'

export default () =>
  <React.Fragment>
    <Hero />
    <Container maxWidth={1280}>
      <Intro />

        {/*
          - Intro - Features - Testimonials
          - Demo
          - CTA
          - Footer
        */}

      <Footer />
    </Container>
  </React.Fragment>
