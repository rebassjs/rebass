import React from 'react'
import { Container } from 'rebass'
import Hero from '../src/Hero'
import Intro from '../src/Intro'
import Demo from '../src/Demo'
import CTA from '../src/CTA'
import Footer from '../src/Footer'
import Scripts from '../src/Scripts'

export default () =>
  <React.Fragment>
    <Hero />
    <Container maxWidth={1280}>
      <Intro />
      <Demo />
      {/* Props/Responsive */}
      {/* Colors */}
      {/* Typography */}
      {/* Grid */}
      {/* Configuration/Theming */}
      {/* Customizing/Extending*/}
      {/* Components */}
      <CTA />
      <Footer />
    </Container>
    <Scripts />
  </React.Fragment>
