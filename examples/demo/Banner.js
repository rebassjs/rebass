import React from 'react'
import { Banner, Heading } from '../src'
import { photo } from './_constants'

export default () =>
  <Banner backgroundImage={photo}>
    <Heading>Banner</Heading>
  </Banner>
