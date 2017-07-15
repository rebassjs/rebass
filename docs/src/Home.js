import React from 'react'
import { createView } from 'rrx'
import { Container } from 'rebass'
import NavBar from './NavBar'
import Header from './Header'
import About from './About'
import Features from './Features'
import Testimonials from './Testimonials'
import Demo from './Demo'
import Colors from './Colors'
import TypographicScale from './TypographicScale'
import CTA from './CTA'
import Footer from './Footer'

const Home = props => (
  <div>
    <NavBar />
    <Header />
    <About />
    <Features />
    <Testimonials />
    <Demo />
    <Colors />
    <TypographicScale />
    <CTA />
    <Footer />
  </div>
)

export default createView(Home)
