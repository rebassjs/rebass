import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Card,
  BackgroundImage,
  Subhead
} from '../src'
import { photo } from './constants'

storiesOf('Card', module)
  .add('Default', () => (
    <Card
      children='Hello Card'
    />
  ))
  .add('Padded', () => (
    <Card
      p={3}
      children='Hello Card'
    />
  ))
  .add('Image', () => (
    <Card w={256}>
      <BackgroundImage
        src={photo}
      />
      <Subhead p={2}>Hello</Subhead>
    </Card>

  ))
