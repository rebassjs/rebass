
import React from 'react'
import { Container } from 'gridsys'
import BannerHeader from './BannerHeader'
import Features from './Features'
import Testimonials from './Testimonials'
import GettingStarted from './GettingStarted'
import About from './About'
import Rule from './Rule'
import Footer from './Footer'

const Home = (props) => {
  return (
    <div>
      <BannerHeader />
      <Features />
      <Testimonials />
      <GettingStarted />
      <About />
      <Footer />
    </div>
  )
}

export default Home

