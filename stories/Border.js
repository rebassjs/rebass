import React from 'react'
import { storiesOf } from '@storybook/react'
import { Border } from '../src'

storiesOf('Border', module)
  .add('Default', () => (
    <Border p={2}>
      Hello
    </Border>
  ))
  .add('Color', () => (
    <Border
      p={2}
      color='tomato'>
      Hello
    </Border>
  ))
  .add('Width', () => (
    <Border
      p={2}
      borderWidth={4}
      color='tomato'>
      Hello
    </Border>
  ))
  .add('Directions', () => (
    <Border
      py={2}
      top
      bottom>
      Hello
    </Border>
  ))
