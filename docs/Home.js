
import React from 'react'
import { Container, Grid } from 'gridsys'
import BannerHeader from './BannerHeader'
import Features from './Features'
import Testimonials from './Testimonials'
import About from './About'
import Rule from './Rule'

import TestGrid from './TestGrid'

const Home = (props) => {
  return (
    <div>
      <BannerHeader />
      <Features />
      <Testimonials />
      <About />
    </div>
  )
}

export default Home

