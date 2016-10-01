
import React from 'react'
import { Container, Grid } from 'gridsys'
import { Base, PageHeader } from '../../src'
import Typography from './Typography'
import Colors from './Colors'
import Buttons from './Buttons'
import Forms from './Forms'

const StyleGuide = () => {
  return (
    <Base px={3}>
      <PageHeader
        heading='Style Guide'
        mb={0}
      />
      <Typography />
      <Colors />
      <Buttons />
      <Forms />
    </Base>
  )
}

export default StyleGuide

