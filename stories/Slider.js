import React from 'react'
import { storiesOf } from '@storybook/react'
import { Slider } from '../src'

storiesOf('components/Slider', module)
  .add('Default', () => (
    <Slider />
  ))
