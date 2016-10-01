
import React from 'react'
import { Container, Grid } from 'gridsys'
import { Box } from 'reflexbox'
import {
  Banner,
  Heading,
  Text,
  Button
} from '../src'

const Header = () => (
  <Banner
    style={{
      minHeight: '75vh',
      paddingTop: 48,
      backgroundAttachment: 'fixed'
    }}
    backgroundImage='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'>
    <Heading size={1} big children='Rebass' />
    <Text children='Configurable example page' />
  </Banner>
)

export default Header

