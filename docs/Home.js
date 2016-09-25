
import React from 'react'
import { Container, Grid } from 'gridsys'
import BannerHeader from './BannerHeader'
import Features from './Features'
import Testimonials from './Testimonials'
import GettingStarted from './GettingStarted'
import About from './About'
import Rule from './Rule'
import Logo from './Logo'

import TestGrid from './TestGrid'

const Home = (props) => {
  return (
    <div>
      <BannerHeader />
      <Features />
      <Testimonials />
      <GettingStarted />
      <About />
    </div>
  )
}

export default Home

