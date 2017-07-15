import React from 'react'
import { storiesOf } from '@storybook/react'
import { BackgroundImage } from '../src'
import { photo } from './constants'

storiesOf('BackgroundImage', module)
  .add('Default', () => (
    <BackgroundImage
      src={photo}
    />
  ))
  .add('Ratio', () => (
    <BackgroundImage
      ratio={1/2}
      src={photo}
    />
  ))
