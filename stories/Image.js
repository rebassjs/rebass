import React from 'react'
import { storiesOf } from '@storybook/react'
import { Image } from '../src'
import { photo } from './constants'

storiesOf('Image', module)
  .add('Default', () => (
    <Image src={photo} />
  ))
